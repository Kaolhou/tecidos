import { supabase } from '@/integrations/supabase/client';

interface ProductInput {
  nome: string;
  preco: number;
  categoria?: string;
  material?: string;
  largura?: string;
  estoque?: number;
  descricao?: string;
}

interface ProductOutput extends ProductInput {
  imagens: string[];
}

/**
 * Normaliza nome para busca (remove acentos, lowercase, etc)
 */
function normalizeForSearch(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .trim();
}

/**
 * Busca arquivo de imagem correspondente ao produto no storage
 */
async function findImageForProduct(productName: string): Promise<string[]> {
  try {
    // Buscar todos os arquivos no storage
    const { data: files, error } = await supabase.storage
      .from('tecidos')
      .list('products', {
        limit: 200,
        offset: 0,
      });

    if (error) {
      console.error('Erro ao listar arquivos:', error);
      return [];
    }

    if (!files || files.length === 0) {
      console.warn('Nenhum arquivo encontrado no storage');
      return [];
    }

    const normalizedProductName = normalizeForSearch(productName);

    // Tentar encontrar arquivo com nome similar
    const matchingFiles = files.filter(file => {
      const normalizedFileName = normalizeForSearch(file.name);

      // Remover extensão para comparação
      const fileNameWithoutExt = normalizedFileName.replace(/\.(jpg|jpeg|png|webp)$/i, '');

      // Verificar se o nome do produto está contido no nome do arquivo
      return fileNameWithoutExt.includes(normalizedProductName) ||
             normalizedProductName.includes(fileNameWithoutExt);
    });

    // Retornar nomes dos arquivos encontrados
    return matchingFiles.map(file => file.name);
  } catch (error) {
    console.error('Erro ao buscar imagem para produto:', productName, error);
    return [];
  }
}

/**
 * Processa JSON de produtos e adiciona URLs de imagens
 */
export async function processProductJson(products: ProductInput[]): Promise<ProductOutput[]> {
  const results: ProductOutput[] = [];

  console.log(`Processando ${products.length} produtos...`);

  for (const product of products) {
    console.log(`\nProcessando: ${product.nome}`);

    // Buscar imagens correspondentes
    const imageFiles = await findImageForProduct(product.nome);

    if (imageFiles.length > 0) {
      console.log(`✓ Encontradas ${imageFiles.length} imagem(ns): ${imageFiles.join(', ')}`);
    } else {
      console.warn(`✗ Nenhuma imagem encontrada para: ${product.nome}`);
    }

    results.push({
      ...product,
      imagens: imageFiles
    });

    // Pequeno delay para evitar rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log(`\n✓ Processamento concluído! ${results.length} produtos processados.`);
  console.log(`✓ ${results.filter(p => p.imagens.length > 0).length} produtos com imagens`);
  console.log(`✗ ${results.filter(p => p.imagens.length === 0).length} produtos sem imagens`);

  return results;
}

/**
 * Gera JSON formatado para download
 */
export function generateJsonForDownload(products: ProductOutput[]): string {
  return JSON.stringify(products, null, 2);
}

/**
 * Faz download do JSON processado
 */
export function downloadJson(products: ProductOutput[], filename: string = 'produtos-completo.json') {
  const json = generateJsonForDownload(products);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
