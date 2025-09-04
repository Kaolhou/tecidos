import { useState, useCallback } from 'react';
import { Upload, X, Image as ImageIcon, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ProductImage {
  id?: string;
  image_url: string;
  alt_text: string | null;
  position: number;
  product_id?: string;
  file?: File;
  type: 'rolo' | 'close' | 'flat_lay';
}

interface ImageUploadComponentProps {
  productId?: string;
  existingImages?: ProductImage[];
  onImagesChange?: (images: ProductImage[]) => void;
}

const ImageUploadComponent = ({ 
  productId, 
  existingImages = [], 
  onImagesChange 
}: ImageUploadComponentProps) => {
  const { toast } = useToast();
  const [images, setImages] = useState<ProductImage[]>(existingImages);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  }, []);

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter(file => {
      const isValidType = file.type.startsWith('image/');
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB
      
      if (!isValidType) {
        toast({
          title: 'Tipo de arquivo inválido',
          description: `${file.name} não é uma imagem válida.`,
          variant: 'destructive',
        });
        return false;
      }
      
      if (!isValidSize) {
        toast({
          title: 'Arquivo muito grande',
          description: `${file.name} excede o limite de 10MB.`,
          variant: 'destructive',
        });
        return false;
      }
      
      return true;
    });

    const newImages: ProductImage[] = validFiles.map((file, index) => ({
      image_url: URL.createObjectURL(file),
      alt_text: file.name,
      position: images.length + index,
      file,
      type: 'close' as const,
    }));

    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);
    onImagesChange?.(updatedImages);
  };

  const uploadToSupabase = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `products/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('tecidos')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('tecidos')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const saveImages = async () => {
    if (!productId) return;

    setUploading(true);
    try {
      const imagesToSave = await Promise.all(
        images.map(async (image) => {
          if (image.file) {
            const publicUrl = await uploadToSupabase(image.file);
            return {
              ...image,
              image_url: publicUrl,
              product_id: productId,
            };
          }
          return image;
        })
      );

      // Delete existing images for this product
      if (existingImages.length > 0) {
        await supabase
          .from('product_images')
          .delete()
          .eq('product_id', productId);
      }

      // Insert new images
      const { error } = await supabase
        .from('product_images')
        .insert(
          imagesToSave.map(({ file, ...image }) => ({
            ...image,
            product_id: productId,
          }))
        );

      if (error) throw error;

      toast({
        title: 'Imagens salvas',
        description: 'Todas as imagens foram salvas com sucesso.',
      });

      // Update local state to remove file objects
      const savedImages = imagesToSave.map(({ file, ...image }) => image);
      setImages(savedImages);
      onImagesChange?.(savedImages);

    } catch (error) {
      console.error('Error saving images:', error);
      toast({
        title: 'Erro ao salvar',
        description: 'Não foi possível salvar as imagens.',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onImagesChange?.(updatedImages);
  };

  const updateImageType = (index: number, type: ProductImage['type']) => {
    const updatedImages = images.map((image, i) => 
      i === index ? { ...image, type } : image
    );
    setImages(updatedImages);
    onImagesChange?.(updatedImages);
  };

  const updateImageAlt = (index: number, alt_text: string) => {
    const updatedImages = images.map((image, i) => 
      i === index ? { ...image, alt_text } : image
    );
    setImages(updatedImages);
    onImagesChange?.(updatedImages);
  };

  const getTypeLabel = (type: ProductImage['type']) => {
    switch (type) {
      case 'rolo': return 'Rolo';
      case 'close': return 'Close-up';
      case 'flat_lay': return 'Plano';
      default: return 'Close-up';
    }
  };

  const getTypeBadgeVariant = (type: ProductImage['type']) => {
    switch (type) {
      case 'rolo': return 'default';
      case 'close': return 'secondary';
      case 'flat_lay': return 'outline';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-base font-medium">Imagens do Produto</Label>
        {images.length > 0 && productId && (
          <Button 
            onClick={saveImages}
            disabled={uploading}
            size="sm"
          >
            {uploading ? 'Salvando...' : 'Salvar Imagens'}
          </Button>
        )}
      </div>

      {/* Upload Area */}
      <Card 
        className={`border-2 border-dashed transition-colors ${
          dragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <CardContent className="p-6">
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <div className="space-y-2">
              <p className="text-sm font-medium">
                Arraste imagens aqui ou clique para selecionar
              </p>
              <p className="text-xs text-muted-foreground">
                Suporta JPG, PNG, WebP até 10MB
              </p>
            </div>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => e.target.files && handleFiles(Array.from(e.target.files))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </CardContent>
      </Card>

      {/* Images Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {/* Image Preview */}
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src={image.image_url}
                      alt={image.alt_text || 'Preview'}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      size="icon"
                      variant="destructive"
                      className="absolute top-2 right-2 h-6 w-6"
                      onClick={() => removeImage(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                    <Badge 
                      variant={getTypeBadgeVariant(image.type)}
                      className="absolute bottom-2 left-2"
                    >
                      {getTypeLabel(image.type)}
                    </Badge>
                  </div>

                  {/* Image Controls */}
                  <div className="space-y-2">
                    <div>
                      <Label htmlFor={`type-${index}`} className="text-xs">Tipo de Imagem</Label>
                      <Select 
                        value={image.type} 
                        onValueChange={(value: ProductImage['type']) => updateImageType(index, value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="close">Close-up</SelectItem>
                          <SelectItem value="rolo">Rolo</SelectItem>
                          <SelectItem value="flat_lay">Plano</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor={`alt-${index}`} className="text-xs">Texto Alternativo</Label>
                      <Input
                        id={`alt-${index}`}
                        value={image.alt_text || ''}
                        onChange={(e) => updateImageAlt(index, e.target.value)}
                        placeholder="Descreva a imagem..."
                        className="text-sm"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {images.length === 0 && (
        <div className="text-center text-muted-foreground py-8">
          <ImageIcon className="mx-auto h-12 w-12 mb-2" />
          <p>Nenhuma imagem adicionada ainda</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploadComponent;