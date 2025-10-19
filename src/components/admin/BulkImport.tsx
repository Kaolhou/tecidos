import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Upload, FileJson, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

type ProdutoJSON = {
  nome: string;
  preco: number;
  categoria: string;
  material: string;
  largura: string;
  estoque: number;
  imagens: string[];
  descricao: string;
};

interface LogEntry {
  type: 'info' | 'success' | 'error';
  message: string;
  timestamp: Date;
}

const BulkImport = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [productsData, setProductsData] = useState<ProdutoJSON[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const addLog = (type: LogEntry['type'], message: string) => {
    setLogs((prev) => [...prev, { type, message, timestamp: new Date() }]);
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.name.endsWith('.json')) {
      toast({
        title: 'Erro',
        description: 'Por favor, selecione um arquivo JSON válido',
        variant: 'destructive',
      });
      return;
    }

    setSelectedFile(file);
    setLogs([]);
    setProgress(0);

    // Ler e validar o arquivo JSON
    try {
      const text = await file.text();
      const data = JSON.parse(text);

      if (!Array.isArray(data)) {
        throw new Error('O arquivo JSON deve conter um array de produtos');
      }

      // Validar estrutura dos produtos
      for (let i = 0; i < data.length; i++) {
        const produto = data[i];
        if (!produto.nome || typeof produto.preco !== 'number') {
          throw new Error(`Produto no índice ${i} está com dados incompletos (nome e preço são obrigatórios)`);
        }
      }

      setProductsData(data);
      addLog('success', `Arquivo carregado com sucesso: ${data.length} produto(s) encontrado(s)`);

      toast({
        title: 'Arquivo carregado',
        description: `${data.length} produto(s) pronto(s) para importação`,
      });
    } catch (error) {
      setSelectedFile(null);
      toast({
        title: 'Erro ao ler arquivo',
        description: error instanceof Error ? error.message : 'Erro desconhecido',
        variant: 'destructive',
      });
      addLog('error', `Erro ao ler arquivo: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  };

  const handleImport = async () => {
    if (productsData.length === 0) {
      toast({
        title: 'Erro',
        description: 'Nenhum produto para importar',
        variant: 'destructive',
      });
      return;
    }

    setIsImporting(true);
    setProgress(0);
    setLogs([]);
    addLog('info', 'Iniciando importação em massa...');

    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < productsData.length; i++) {
      const produto = productsData[i];
      const progressPercent = ((i + 1) / productsData.length) * 100;
      setProgress(progressPercent);

      try {
        addLog('info', `Processando produto: ${produto.nome}...`);

        // 1. Inserir produto na tabela products
        const { data: productData, error: productError } = await supabase
          .from('products')
          .insert({
            name: produto.nome,
            price: produto.preco,
            category: produto.categoria || null,
            material: produto.material || null,
            width: produto.largura || null,
            stock_quantity: produto.estoque || 0,
            description: produto.descricao || null,
          })
          .select()
          .single();

        if (productError) {
          throw new Error(`Erro ao inserir produto: ${productError.message}`);
        }

        const productId = productData.id;
        addLog('success', `Produto "${produto.nome}" criado com sucesso (ID: ${productId})`);

        // 2. Processar imagens do produto
        if (produto.imagens && Array.isArray(produto.imagens) && produto.imagens.length > 0) {
          addLog('info', `Processando ${produto.imagens.length} imagem(ns) para "${produto.nome}"...`);

          for (let imgIndex = 0; imgIndex < produto.imagens.length; imgIndex++) {
            const imagemNome = produto.imagens[imgIndex];

            try {
              // Construir URL pública manualmente
              const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
              const imageUrl = `${supabaseUrl}/storage/v1/object/public/tecidos/products/${encodeURIComponent(imagemNome)}`;

              // Inserir registro na tabela product_images
              const { error: imageError } = await supabase
                .from('product_images')
                .insert({
                  product_id: productId,
                  image_url: imageUrl,
                  alt_text: `${produto.nome} - Imagem ${imgIndex + 1}`,
                  position: imgIndex,
                });

              if (imageError) {
                throw new Error(`Erro ao associar imagem: ${imageError.message}`);
              }

              addLog('success', `  ✓ Imagem "${imagemNome}" associada com sucesso`);
            } catch (imgError) {
              addLog('error', `  ✗ Erro ao processar imagem "${imagemNome}": ${imgError instanceof Error ? imgError.message : 'Erro desconhecido'}`);
            }
          }
        } else {
          addLog('info', `Produto "${produto.nome}" criado sem imagens`);
        }

        successCount++;
      } catch (error) {
        errorCount++;
        addLog('error', `✗ Erro ao processar "${produto.nome}": ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
      }
    }

    setIsImporting(false);
    setProgress(100);

    const resultMessage = `Importação concluída: ${successCount} sucesso(s), ${errorCount} erro(s)`;
    addLog('info', resultMessage);

    toast({
      title: 'Importação concluída',
      description: resultMessage,
      variant: errorCount > 0 ? 'destructive' : 'default',
    });
  };

  const handleReset = () => {
    setSelectedFile(null);
    setProductsData([]);
    setLogs([]);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getLogIcon = (type: LogEntry['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'info':
        return <AlertTriangle className="h-4 w-4 text-blue-600" />;
    }
  };

  const getLogColor = (type: LogEntry['type']) => {
    switch (type) {
      case 'success':
        return 'text-green-700';
      case 'error':
        return 'text-red-700';
      case 'info':
        return 'text-blue-700';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileJson className="h-5 w-5" />
            Importar Produtos em Massa
          </CardTitle>
          <CardDescription>
            Faça upload de um arquivo JSON para cadastrar múltiplos produtos de uma vez
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Área de Upload */}
          <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <div className="space-y-2">
              <label htmlFor="json-file-upload" className="cursor-pointer">
                <span className="text-lg font-medium">
                  Clique para selecionar arquivo JSON
                </span>
                <Input
                  id="json-file-upload"
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".json"
                  onChange={handleFileSelect}
                  disabled={isImporting}
                />
              </label>
              <p className="text-sm text-muted-foreground">
                {selectedFile ? `Arquivo selecionado: ${selectedFile.name}` : 'Nenhum arquivo selecionado'}
              </p>
            </div>
          </div>

          {/* Estrutura do JSON esperado */}
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Estrutura esperada do JSON:</strong>
              <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-x-auto">
{`[
  {
    "nome": "Nome do Produto",
    "preco": 49.90,
    "categoria": "Categoria",
    "material": "Material",
    "largura": "Largura",
    "estoque": 100,
    "imagens": ["imagem1.jpg", "imagem2.jpg"],
    "descricao": "Descrição do produto"
  }
]`}
              </pre>
              <p className="mt-2 text-xs">
                <strong>Nota:</strong> As imagens devem estar previamente no Supabase Storage em <code>products/</code>
              </p>
            </AlertDescription>
          </Alert>

          {/* Barra de Progresso */}
          {(isImporting || progress > 0) && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progresso da importação</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {/* Botões de Ação */}
          <div className="flex gap-2">
            <Button
              onClick={handleImport}
              disabled={!selectedFile || isImporting || productsData.length === 0}
              className="flex-1"
            >
              {isImporting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Importando...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Iniciar Importação
                </>
              )}
            </Button>
            {selectedFile && !isImporting && (
              <Button variant="outline" onClick={handleReset}>
                Limpar
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Área de Logs */}
      {logs.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Logs de Importação</CardTitle>
            <CardDescription>
              Acompanhe em tempo real o processo de importação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96 w-full">
              <div className="space-y-2">
                {logs.map((log, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 p-2 rounded-md bg-muted/50 hover:bg-muted transition-colors"
                  >
                    {getLogIcon(log.type)}
                    <div className="flex-1">
                      <p className={`text-sm font-mono ${getLogColor(log.type)}`}>
                        {log.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {log.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BulkImport;
