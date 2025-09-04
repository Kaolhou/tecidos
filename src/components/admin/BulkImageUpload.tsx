import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { Upload, FileImage, CheckCircle, XCircle, AlertTriangle, Download, BarChart3, Image, Search } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ProductMatch {
  fileName: string;
  productName: string;
  productId: string;
  confidence: 'exact' | 'high' | 'low' | 'none';
  file: File;
}

interface NewProductData {
  fileName: string;
  productName: string;
  file: File;
  category: string;
  price: number;
}

interface UploadResult {
  fileName: string;
  productName: string;
  status: 'success' | 'error';
  message: string;
}

interface UploadHistory {
  id: string;
  timestamp: Date;
  totalFiles: number;
  successCount: number;
  errorCount: number;
  results: UploadResult[];
  newProductsCreated: number;
}

interface ProductWithImages {
  id: string;
  name: string;
  category: string;
  image_count: number;
  first_image_url: string | null;
}

interface BulkImageUploadProps {
  products: Array<{ id: string; name: string }>;
  onComplete: () => void;
}

const BulkImageUpload = ({ products, onComplete }: BulkImageUploadProps) => {
  const { toast } = useToast();
  const [matches, setMatches] = useState<ProductMatch[]>([]);
  const [newProducts, setNewProducts] = useState<NewProductData[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [results, setResults] = useState<UploadResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [uploadHistory, setUploadHistory] = useState<UploadHistory[]>([]);
  
  // Status tab state
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'with-images' | 'without-images'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Load upload history from localStorage on component mount
  React.useEffect(() => {
    const savedHistory = localStorage.getItem('uploadHistory');
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        setUploadHistory(parsed.map((h: any) => ({
          ...h,
          timestamp: new Date(h.timestamp)
        })));
      } catch (error) {
        console.error('Error parsing upload history:', error);
      }
    }
  }, []);

  // Fetch products with image counts
  const { data: productsWithImages = [], refetch: refetchProducts } = useQuery({
    queryKey: ['products-with-images', searchTerm, statusFilter],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select(`
          id,
          name,
          category,
          product_images (
            image_url
          )
        `)
        .order('name');

      if (searchTerm) {
        query = query.ilike('name', `%${searchTerm}%`);
      }

      const { data, error } = await query;
      if (error) throw error;

      const productsWithImageCount: ProductWithImages[] = data.map(product => ({
        id: product.id,
        name: product.name,
        category: product.category || 'Geral',
        image_count: product.product_images?.length || 0,
        first_image_url: product.product_images?.[0]?.image_url || null
      }));

      // Apply status filter
      if (statusFilter === 'with-images') {
        return productsWithImageCount.filter(p => p.image_count > 0);
      } else if (statusFilter === 'without-images') {
        return productsWithImageCount.filter(p => p.image_count === 0);
      }

      return productsWithImageCount;
    }
  });

  // Statistics
  const totalProducts = productsWithImages.length;
  const productsWithImagesCount = productsWithImages.filter(p => p.image_count > 0).length;
  const productsWithoutImagesCount = totalProducts - productsWithImagesCount;

  const normalizeString = (str: string): string => {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const findProductMatch = (fileName: string): ProductMatch['confidence'] => {
    const normalizedFileName = normalizeString(fileName.replace(/\.(jpg|jpeg|png|webp)$/i, ''));
    
    for (const product of products) {
      const normalizedProductName = normalizeString(product.name);
      
      // Exact match
      if (normalizedFileName === normalizedProductName) {
        return 'exact';
      }
      
      // High confidence: file name contains most product words
      const productWords = normalizedProductName.split(' ').filter(word => word.length > 2);
      const fileWords = normalizedFileName.split(' ');
      const matchedWords = productWords.filter(word => 
        fileWords.some(fileWord => fileWord.includes(word) || word.includes(fileWord))
      );
      
      if (matchedWords.length >= Math.ceil(productWords.length * 0.8)) {
        return 'high';
      }
      
      // Low confidence: some key words match
      if (matchedWords.length >= Math.ceil(productWords.length * 0.5)) {
        return 'low';
      }
    }
    
    return 'none';
  };

  const getBestProductMatch = (fileName: string): { productId: string; productName: string } | null => {
    const normalizedFileName = normalizeString(fileName.replace(/\.(jpg|jpeg|png|webp)$/i, ''));
    let bestMatch = null;
    let bestScore = 0;
    
    for (const product of products) {
      const normalizedProductName = normalizeString(product.name);
      
      // Exact match gets highest score
      if (normalizedFileName === normalizedProductName) {
        return { productId: product.id, productName: product.name };
      }
      
      // Calculate similarity score
      const productWords = normalizedProductName.split(' ').filter(word => word.length > 2);
      const fileWords = normalizedFileName.split(' ');
      let score = 0;
      
      for (const productWord of productWords) {
        for (const fileWord of fileWords) {
          if (fileWord.includes(productWord) || productWord.includes(fileWord)) {
            score += productWord.length;
          }
        }
      }
      
      // Normalize score by product name length
      const normalizedScore = score / normalizedProductName.length;
      
      if (normalizedScore > bestScore && normalizedScore > 0.5) {
        bestScore = normalizedScore;
        bestMatch = { productId: product.id, productName: product.name };
      }
    }
    
    return bestMatch;
  };

  const extractProductDataFromFileName = (fileName: string): { name: string; category: string } => {
    const cleanName = fileName
      .replace(/\.(jpg|jpeg|png|webp)$/i, '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    // Try to detect category from filename
    const lowerName = cleanName.toLowerCase();
    let category = 'Geral';
    
    if (lowerName.includes('alfaiataria') || lowerName.includes('alfaia')) category = 'Alfaiataria';
    else if (lowerName.includes('oxford') || lowerName.includes('oxfordine')) category = 'Oxford';
    else if (lowerName.includes('crepe') || lowerName.includes('chanel')) category = 'Crepe';
    else if (lowerName.includes('malha') || lowerName.includes('jersey')) category = 'Malha';
    else if (lowerName.includes('linho')) category = 'Linho';
    else if (lowerName.includes('viscose')) category = 'Viscose';
    
    return { name: cleanName, category };
  };

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    if (files.length === 0) return;
    
    const newMatches: ProductMatch[] = [];
    const notFoundProducts: NewProductData[] = [];
    
    files.forEach(file => {
      const fileName = file.name;
      const confidence = findProductMatch(fileName);
      const match = getBestProductMatch(fileName);
      
      if (confidence === 'none' || !match) {
        // Create new product data for unmatched files
        const { name, category } = extractProductDataFromFileName(fileName);
        notFoundProducts.push({
          fileName,
          productName: name,
          file,
          category,
          price: 50.0 // Default price
        });
      } else {
        newMatches.push({
          fileName,
          productName: match.productName,
          productId: match.productId,
          confidence,
          file
        });
      }
    });
    
    setMatches(newMatches);
    setNewProducts(notFoundProducts);
    setShowResults(false);
    
    const exactMatches = newMatches.filter(m => m.confidence === 'exact').length;
    const highMatches = newMatches.filter(m => m.confidence === 'high').length;
    const lowMatches = newMatches.filter(m => m.confidence === 'low').length;
    
    toast({
      title: 'Arquivos processados',
      description: `${exactMatches} exatos, ${highMatches} alta conf., ${lowMatches} baixa conf., ${notFoundProducts.length} novos produtos`,
    });
  }, [products, toast]);

  const createNewProducts = async () => {
    const createdProducts: { id: string; name: string }[] = [];
    
    for (const newProduct of newProducts) {
      try {
        // Create new product
        const { data: productData, error: productError } = await supabase
          .from('products')
          .insert({
            name: newProduct.productName,
            category: newProduct.category,
            price: newProduct.price,
            description: `Produto criado automaticamente a partir do upload de imagem: ${newProduct.fileName}`
          })
          .select()
          .single();
        
        if (productError) throw productError;
        
        createdProducts.push({ id: productData.id, name: productData.name });
        
        // Upload image for the new product
        const fileExt = newProduct.file.name.split('.').pop();
        const fileName = `${productData.id}_${Date.now()}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('tecidos')
          .upload(`products/${fileName}`, newProduct.file, {
            cacheControl: '3600',
            upsert: false
          });
        
        if (uploadError) throw uploadError;
        
        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('tecidos')
          .getPublicUrl(`products/${fileName}`);
        
        // Save to product_images table
        const { error: dbError } = await supabase
          .from('product_images')
          .insert({
            product_id: productData.id,
            image_url: publicUrl,
            alt_text: `${productData.name} - Imagem do produto`,
            position: 0
          });
        
        if (dbError) throw dbError;
        
      } catch (error) {
        console.error('Erro ao criar produto:', error);
        throw error;
      }
    }
    
    return createdProducts;
  };

  const uploadImages = async () => {
    setIsUploading(true);
    setUploadProgress(0);
    const uploadResults: UploadResult[] = [];
    let createdProducts: { id: string; name: string }[] = [];
    
    try {
      // First, create new products if any
      if (newProducts.length > 0) {
        createdProducts = await createNewProducts();
        
        // Add success results for created products
        newProducts.forEach((newProd, index) => {
          uploadResults.push({
            fileName: newProd.fileName,
            productName: createdProducts[index]?.name || newProd.productName,
            status: 'success',
            message: 'Produto criado e imagem enviada com sucesso'
          });
        });
      }
      
      // Then, upload images for existing products
      const validMatches = matches.filter(match => match.productId && match.confidence !== 'none');
      const totalOperations = validMatches.length + newProducts.length;
      let completedOperations = newProducts.length;
      
      for (let i = 0; i < validMatches.length; i++) {
        const match = validMatches[i];
        
        try {
          // Upload image to Supabase Storage
          const fileExt = match.file.name.split('.').pop();
          const fileName = `${match.productId}_${Date.now()}.${fileExt}`;
          
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('tecidos')
            .upload(`products/${fileName}`, match.file, {
              cacheControl: '3600',
              upsert: false
            });
          
          if (uploadError) {
            throw uploadError;
          }
          
          // Get public URL
          const { data: { publicUrl } } = supabase.storage
            .from('tecidos')
            .getPublicUrl(`products/${fileName}`);
          
          // Save to product_images table
          const { error: dbError } = await supabase
            .from('product_images')
            .insert({
              product_id: match.productId,
              image_url: publicUrl,
              alt_text: `${match.productName} - Imagem do produto`,
              position: 0
            });
          
          if (dbError) {
            throw dbError;
          }
          
          uploadResults.push({
            fileName: match.fileName,
            productName: match.productName,
            status: 'success',
            message: 'Upload concluído com sucesso'
          });
          
        } catch (error) {
          console.error('Erro no upload:', error);
          uploadResults.push({
            fileName: match.fileName,
            productName: match.productName,
            status: 'error',
            message: error instanceof Error ? error.message : 'Erro desconhecido'
          });
        }
        
        completedOperations++;
        setUploadProgress((completedOperations / totalOperations) * 100);
      }
      
    } catch (error) {
      console.error('Erro geral no upload:', error);
      toast({
        title: 'Erro no upload',
        description: 'Ocorreu um erro durante o processo de upload',
        variant: 'destructive'
      });
    }
    
    setResults(uploadResults);
    setShowResults(true);
    setIsUploading(false);
    
    const successCount = uploadResults.filter(r => r.status === 'success').length;
    const errorCount = uploadResults.filter(r => r.status === 'error').length;
    
    // Save to upload history
    const historyEntry: UploadHistory = {
      id: Date.now().toString(),
      timestamp: new Date(),
      totalFiles: uploadResults.length,
      successCount,
      errorCount,
      results: uploadResults,
      newProductsCreated: createdProducts.length
    };
    
    const updatedHistory = [historyEntry, ...uploadHistory].slice(0, 50); // Keep last 50 entries
    setUploadHistory(updatedHistory);
    localStorage.setItem('uploadHistory', JSON.stringify(updatedHistory));
    
    toast({
      title: 'Upload concluído',
      description: `${successCount} sucessos, ${errorCount} erros`,
      variant: successCount > 0 ? 'default' : 'destructive'
    });
    
    if (successCount > 0) {
      onComplete();
      refetchProducts(); // Refresh the products list
    }
  };

  const getConfidenceBadge = (confidence: ProductMatch['confidence']) => {
    switch (confidence) {
      case 'exact':
        return <Badge className="bg-green-100 text-green-800">Exato</Badge>;
      case 'high':
        return <Badge className="bg-blue-100 text-blue-800">Alta Conf.</Badge>;
      case 'low':
        return <Badge className="bg-cream-100 text-cream-800">Baixa Conf.</Badge>;
      case 'none':
        return <Badge variant="destructive">Sem Match</Badge>;
    }
  };

  // Pagination
  const filteredProducts = productsWithImages;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const renderStatusTab = () => (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <BarChart3 className="h-8 w-8 text-petrol-500" />
            <div>
              <div className="text-2xl font-bold text-antracite-800">{totalProducts}</div>
              <div className="text-sm text-antracite-600">Total de Produtos</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div>
              <div className="text-2xl font-bold text-antracite-800">{productsWithImagesCount}</div>
              <div className="text-sm text-antracite-600">Com Imagens</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <XCircle className="h-8 w-8 text-red-600" />
            <div>
              <div className="text-2xl font-bold text-antracite-800">{productsWithoutImagesCount}</div>
              <div className="text-sm text-antracite-600">Sem Imagens</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white/50 backdrop-blur-sm border border-petrol-200 rounded-lg p-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-petrol-400 h-4 w-4" />
            <Input
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 bg-white border-petrol-200 text-antracite-800 placeholder:text-antracite-500"
            />
          </div>
        </div>
        <Select value={statusFilter} onValueChange={(value: any) => {
          setStatusFilter(value);
          setCurrentPage(1);
        }}>
          <SelectTrigger className="w-full sm:w-[200px] bg-white border-petrol-200 text-antracite-800">
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent className="bg-white border-petrol-200">
            <SelectItem value="all">Todos os Produtos</SelectItem>
            <SelectItem value="with-images">Com Imagens</SelectItem>
            <SelectItem value="without-images">Sem Imagens</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Products List */}
      <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-antracite-800">Produtos ({filteredProducts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-2">
              {paginatedProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-3 border border-petrol-100 rounded-lg hover:bg-petrol-50/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg border border-petrol-200 overflow-hidden bg-petrol-50 flex items-center justify-center">
                      {product.first_image_url ? (
                        <img 
                          src={product.first_image_url} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image className="h-6 w-6 text-petrol-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-antracite-800">{product.name}</div>
                      <div className="text-sm text-antracite-600">{product.category}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={product.image_count > 0 ? "default" : "secondary"}
                      className={product.image_count > 0 ? "bg-petrol-100 text-petrol-800 border-petrol-200" : "bg-antracite-100 text-antracite-700 border-antracite-200"}
                    >
                      {product.image_count} {product.image_count === 1 ? 'imagem' : 'imagens'}
                    </Badge>
                    {product.image_count === 0 && (
                      <Badge variant="destructive">Sem imagem</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Mostrando {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} de {filteredProducts.length}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Anterior
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Próximo
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );

  const updateNewProduct = (index: number, field: keyof NewProductData, value: string | number) => {
    setNewProducts(prev => prev.map((product, i) => 
      i === index ? { ...product, [field]: value } : product
    ));
  };

  if (showResults) {
    return (
      <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-antracite-800">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Resultados do Upload
          </CardTitle>
          <CardDescription className="text-antracite-600">
            Relatório detalhado do upload em massa
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-2">
              {results.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-petrol-100 rounded-lg hover:bg-petrol-50/50 transition-colors">
                  <div className="flex items-center gap-3">
                    {result.status === 'success' ? 
                      <CheckCircle className="h-4 w-4 text-green-600" /> : 
                      <XCircle className="h-4 w-4 text-red-600" />
                    }
                    <div>
                      <div className="font-medium text-antracite-800">{result.fileName}</div>
                      <div className="text-sm text-antracite-600">{result.productName}</div>
                    </div>
                  </div>
                  <div className="text-sm">
                    {result.status === 'success' ? 
                      <Badge className="bg-green-100 text-green-800">Sucesso</Badge> :
                      <Badge variant="destructive">Erro</Badge>
                    }
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="mt-4 flex gap-2">
            <Button 
              onClick={() => {
                setMatches([]);
                setNewProducts([]);
                setResults([]);
                setShowResults(false);
              }}
              className="bg-petrol-600 hover:bg-petrol-700 text-white"
            >
              Novo Upload
            </Button>
            <Button 
              variant="outline" 
              onClick={onComplete}
              className="border-petrol-200 text-antracite-700 hover:bg-petrol-50"
            >
              Fechar
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-petrol-50 to-cream-50 p-6">
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload de Imagens
            </TabsTrigger>
            <TabsTrigger value="new-products" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Produtos Não Encontrados ({newProducts.length})
            </TabsTrigger>
            <TabsTrigger value="status" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Status das Imagens
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Histórico ({uploadHistory.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-antracite-800">Upload em Massa de Imagens</CardTitle>
                <CardDescription className="text-antracite-600">
                  Selecione múltiplas imagens para associar automaticamente aos produtos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-petrol-300 rounded-lg p-8 text-center hover:border-petrol-400 transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-petrol-400 mb-4" />
                  <div className="space-y-2">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <span className="text-lg font-medium text-antracite-800">
                        Clique para selecionar imagens
                      </span>
                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/*"
                        onChange={handleFileSelect}
                      />
                    </label>
                    <p className="text-sm text-antracite-600">
                      Ou arraste e solte suas imagens aqui
                    </p>
                    <p className="text-xs text-antracite-500">
                      Formatos aceitos: JPG, PNG, WebP
                    </p>
                  </div>
                </div>
                
                {(matches.length > 0 || newProducts.length > 0) && (
                  <Alert className="bg-white/80 border-petrol-200">
                    <FileImage className="h-4 w-4 text-petrol-600" />
                    <AlertDescription className="text-antracite-700">
                      <strong>{matches.length + newProducts.length} arquivos</strong> foram analisados. 
                      <strong>{matches.length}</strong> com produtos existentes, <strong>{newProducts.length}</strong> para novos produtos.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {matches.length > 0 && (
              <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-antracite-800">Correspondências Encontradas</CardTitle>
                  <CardDescription className="text-antracite-600">
                    Imagens que serão associadas a produtos existentes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-64 w-full">
                    <div className="space-y-2">
                      {matches.map((match, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-petrol-100 rounded-lg hover:bg-petrol-50/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <FileImage className="h-5 w-5 text-petrol-500" />
                            <div>
                              <div className="font-medium text-antracite-800">{match.fileName}</div>
                              <div className="text-sm text-antracite-600">{match.productName}</div>
                            </div>
                          </div>
                          {getConfidenceBadge(match.confidence)}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            )}

            {(matches.length > 0 || newProducts.length > 0) && (
              <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-antracite-800">Iniciar Upload</CardTitle>
                  <CardDescription className="text-antracite-600">
                    Processar todas as imagens (produtos existentes e novos)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isUploading && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-antracite-600">
                        <span>Progresso do upload</span>
                        <span>{Math.round(uploadProgress)}%</span>
                      </div>
                      <Progress value={uploadProgress} className="h-2" />
                    </div>
                  )}
                  
                  <Button 
                    onClick={uploadImages}
                    disabled={isUploading}
                    className="w-full bg-petrol-600 hover:bg-petrol-700 text-white"
                  >
                    {isUploading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processando...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Processar {matches.length + newProducts.length} Imagens
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="new-products" className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-antracite-800">Produtos Não Encontrados</CardTitle>
                <CardDescription className="text-antracite-600">
                  Essas imagens não foram associadas a produtos existentes. Novos produtos serão criados automaticamente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {newProducts.length === 0 ? (
                  <div className="text-center py-8 text-antracite-600">
                    <AlertTriangle className="mx-auto h-12 w-12 text-antracite-400 mb-4" />
                    <p>Nenhuma imagem sem correspondência encontrada.</p>
                    <p className="text-sm">Todas as imagens foram associadas a produtos existentes.</p>
                  </div>
                ) : (
                  <ScrollArea className="h-96 w-full">
                    <div className="space-y-4">
                      {newProducts.map((product, index) => (
                        <div key={index} className="p-4 border border-petrol-100 rounded-lg bg-white/50">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 border border-petrol-200 rounded-lg overflow-hidden bg-petrol-50 flex items-center justify-center">
                              <img 
                                src={URL.createObjectURL(product.file)} 
                                alt={product.fileName}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 space-y-3">
                              <div>
                                <label className="text-sm font-medium text-antracite-700">Nome do Produto</label>
                                <Input
                                  value={product.productName}
                                  onChange={(e) => updateNewProduct(index, 'productName', e.target.value)}
                                  className="mt-1 bg-white border-petrol-200"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="text-sm font-medium text-antracite-700">Categoria</label>
                                  <Select 
                                    value={product.category} 
                                    onValueChange={(value) => updateNewProduct(index, 'category', value)}
                                  >
                                    <SelectTrigger className="mt-1 bg-white border-petrol-200">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Geral">Geral</SelectItem>
                                      <SelectItem value="Alfaiataria">Alfaiataria</SelectItem>
                                      <SelectItem value="Oxford">Oxford</SelectItem>
                                      <SelectItem value="Crepe">Crepe</SelectItem>
                                      <SelectItem value="Malha">Malha</SelectItem>
                                      <SelectItem value="Linho">Linho</SelectItem>
                                      <SelectItem value="Viscose">Viscose</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-antracite-700">Preço (R$)</label>
                                  <Input
                                    type="number"
                                    step="0.01"
                                    value={product.price}
                                    onChange={(e) => updateNewProduct(index, 'price', parseFloat(e.target.value) || 0)}
                                    className="mt-1 bg-white border-petrol-200"
                                  />
                                </div>
                              </div>
                              <div className="text-xs text-antracite-500">
                                Arquivo: {product.fileName}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status" className="space-y-6">
            {renderStatusTab()}
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-antracite-800">Histórico de Uploads</CardTitle>
                <CardDescription className="text-antracite-600">
                  Histórico detalhado de todos os uploads realizados
                </CardDescription>
              </CardHeader>
              <CardContent>
                {uploadHistory.length === 0 ? (
                  <div className="text-center py-8 text-antracite-600">
                    <Download className="mx-auto h-12 w-12 text-antracite-400 mb-4" />
                    <p>Nenhum upload realizado ainda.</p>
                    <p className="text-sm">O histórico aparecerá aqui após o primeiro upload.</p>
                  </div>
                ) : (
                  <ScrollArea className="h-96">
                    <div className="space-y-4">
                      {uploadHistory.map((entry) => (
                        <Card key={entry.id} className="border border-petrol-100 bg-white/50">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg text-antracite-800">
                                Upload de {entry.timestamp.toLocaleDateString('pt-BR')} às {entry.timestamp.toLocaleTimeString('pt-BR')}
                              </CardTitle>
                              <div className="flex gap-2">
                                <Badge className="bg-green-100 text-green-800">{entry.successCount} sucessos</Badge>
                                {entry.errorCount > 0 && <Badge variant="destructive">{entry.errorCount} erros</Badge>}
                                {entry.newProductsCreated > 0 && <Badge className="bg-blue-100 text-blue-800">{entry.newProductsCreated} novos produtos</Badge>}
                              </div>
                            </div>
                            <CardDescription className="text-antracite-600">
                              Total de {entry.totalFiles} arquivos processados
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ScrollArea className="h-32">
                              <div className="space-y-1">
                                {entry.results.map((result, index) => (
                                  <div key={index} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                      {result.status === 'success' ? 
                                        <CheckCircle className="h-3 w-3 text-green-600" /> : 
                                        <XCircle className="h-3 w-3 text-red-600" />
                                      }
                                      <span className="text-antracite-700">{result.fileName}</span>
                                      <span className="text-antracite-500">→ {result.productName}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </ScrollArea>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                )}
                
                {uploadHistory.length > 0 && (
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-antracite-600">
                      {uploadHistory.length} upload(s) no histórico
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setUploadHistory([]);
                        localStorage.removeItem('uploadHistory');
                        toast({ title: 'Histórico limpo com sucesso' });
                      }}
                      className="border-petrol-200 text-antracite-700 hover:bg-petrol-50"
                    >
                      Limpar Histórico
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BulkImageUpload;