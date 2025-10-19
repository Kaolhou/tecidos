import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { Upload, Download, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { processProductJson, downloadJson } from '@/utils/processProductJson';

interface LogEntry {
  type: 'info' | 'success' | 'error' | 'warning';
  message: string;
  timestamp: Date;
}

const JsonProcessor = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [processedData, setProcessedData] = useState<any>(null);
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
    setProcessedData(null);

    // Ler e validar o arquivo JSON
    try {
      const text = await file.text();
      const data = JSON.parse(text);

      if (!Array.isArray(data)) {
        throw new Error('O arquivo JSON deve conter um array de produtos');
      }

      addLog('success', `Arquivo carregado com sucesso: ${data.length} produto(s) encontrado(s)`);

      toast({
        title: 'Arquivo carregado',
        description: `${data.length} produto(s) pronto(s) para processamento`,
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

  const handleProcess = async () => {
    if (!selectedFile) {
      toast({
        title: 'Erro',
        description: 'Nenhum arquivo selecionado',
        variant: 'destructive',
      });
      return;
    }

    setIsProcessing(true);
    setLogs([]);
    addLog('info', 'Iniciando processamento...');

    try {
      const text = await selectedFile.text();
      const data = JSON.parse(text);

      addLog('info', `Processando ${data.length} produtos...`);
      addLog('info', 'Buscando imagens correspondentes no storage...');

      const processedProducts = await processProductJson(data);

      const withImages = processedProducts.filter(p => p.imagens && p.imagens.length > 0).length;
      const withoutImages = processedProducts.filter(p => !p.imagens || p.imagens.length === 0).length;

      addLog('success', `✓ Processamento concluído!`);
      addLog('info', `✓ ${withImages} produtos com imagens`);
      if (withoutImages > 0) {
        addLog('warning', `⚠ ${withoutImages} produtos sem imagens`);
      }

      setProcessedData(processedProducts);

      toast({
        title: 'Processamento concluído',
        description: `${withImages} produtos com imagens, ${withoutImages} sem imagens`,
      });

    } catch (error) {
      console.error('Error processing:', error);
      addLog('error', `✗ Erro ao processar: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
      toast({
        title: 'Erro ao processar',
        description: error instanceof Error ? error.message : 'Erro desconhecido',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedData) {
      toast({
        title: 'Erro',
        description: 'Nenhum dado processado para download',
        variant: 'destructive',
      });
      return;
    }

    downloadJson(processedData, 'produtos-completo.json');
    addLog('success', '✓ JSON baixado com sucesso!');
    toast({
      title: 'Download concluído',
      description: 'Arquivo produtos-completo.json baixado',
    });
  };

  const handleReset = () => {
    setSelectedFile(null);
    setProcessedData(null);
    setLogs([]);
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
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
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
      case 'warning':
        return 'text-yellow-700';
      case 'info':
        return 'text-blue-700';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Processar JSON de Produtos
          </CardTitle>
          <CardDescription>
            Faça upload de um JSON e o sistema irá adicionar as URLs corretas das imagens do storage
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
                  disabled={isProcessing}
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
    "descricao": "Descrição do produto"
  }
]`}
              </pre>
              <p className="mt-2 text-xs">
                <strong>O sistema irá:</strong> Buscar automaticamente as imagens no storage e adicionar o campo "imagens" com os nomes dos arquivos encontrados.
              </p>
            </AlertDescription>
          </Alert>

          {/* Botões de Ação */}
          <div className="flex gap-2">
            <Button
              onClick={handleProcess}
              disabled={!selectedFile || isProcessing}
              className="flex-1"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processando...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Processar JSON
                </>
              )}
            </Button>
            {processedData && (
              <Button variant="default" onClick={handleDownload} className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Baixar JSON Completo
              </Button>
            )}
            {(selectedFile || processedData) && !isProcessing && (
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
            <CardTitle>Logs de Processamento</CardTitle>
            <CardDescription>
              Acompanhe em tempo real o processo de mapeamento das imagens
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

export default JsonProcessor;
