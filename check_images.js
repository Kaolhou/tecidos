import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nythrkrfdybycrjpkans.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55dGhya3JmZHlieWNyanBrYW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MDQ0ODIsImV4cCI6MjA3NjE4MDQ4Mn0.hvJwNxqG1ZBtWaIv49in-56N_DH7uzoOCjjvvno6i_8';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkImageExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function checkAllProducts() {
  console.log('🔍 Verificando imagens dos produtos...\n');

  // Buscar todos os produtos
  const { data: products, error } = await supabase
    .from('products')
    .select('id, name, category, image_url')
    .order('category', { ascending: true })
    .order('name', { ascending: true });

  if (error) {
    console.error('Erro ao buscar produtos:', error);
    return;
  }

  const productsWithoutUrl = [];
  const productsWithBrokenImages = [];
  const productsWithImages = [];

  console.log(`📊 Total de produtos: ${products.length}\n`);
  console.log('Verificando URLs...\n');

  for (const product of products) {
    if (!product.image_url) {
      productsWithoutUrl.push(product);
    } else {
      const imageExists = await checkImageExists(product.image_url);
      if (imageExists) {
        productsWithImages.push(product);
      } else {
        productsWithBrokenImages.push(product);
      }
      // Pequeno delay para não sobrecarregar
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  // Relatório
  console.log('\n' + '='.repeat(80));
  console.log('📋 RELATÓRIO DE IMAGENS');
  console.log('='.repeat(80) + '\n');

  console.log(`✅ Produtos com imagens funcionando: ${productsWithImages.length}`);
  console.log(`❌ Produtos com URLs quebradas: ${productsWithBrokenImages.length}`);
  console.log(`⚠️  Produtos sem URL cadastrada: ${productsWithoutUrl.length}\n`);

  if (productsWithoutUrl.length > 0) {
    console.log('\n' + '='.repeat(80));
    console.log('⚠️  PRODUTOS SEM URL CADASTRADA');
    console.log('='.repeat(80) + '\n');

    const byCategory = {};
    productsWithoutUrl.forEach(p => {
      if (!byCategory[p.category]) byCategory[p.category] = [];
      byCategory[p.category].push(p.name);
    });

    Object.keys(byCategory).sort().forEach(cat => {
      console.log(`\n📁 ${cat || 'Sem categoria'} (${byCategory[cat].length}):`);
      byCategory[cat].forEach(name => console.log(`   - ${name}`));
    });
  }

  if (productsWithBrokenImages.length > 0) {
    console.log('\n' + '='.repeat(80));
    console.log('❌ PRODUTOS COM IMAGENS QUEBRADAS (URL existe mas imagem não)');
    console.log('='.repeat(80) + '\n');

    const byCategory = {};
    productsWithBrokenImages.forEach(p => {
      if (!byCategory[p.category]) byCategory[p.category] = [];
      byCategory[p.category].push({ name: p.name, url: p.image_url });
    });

    Object.keys(byCategory).sort().forEach(cat => {
      console.log(`\n📁 ${cat || 'Sem categoria'} (${byCategory[cat].length}):`);
      byCategory[cat].forEach(item => {
        console.log(`   - ${item.name}`);
        console.log(`     URL: ${item.url}`);
      });
    });
  }

  console.log('\n' + '='.repeat(80));
  console.log('RESUMO FINAL');
  console.log('='.repeat(80));
  console.log(`Total de produtos analisados: ${products.length}`);
  console.log(`Produtos OK: ${productsWithImages.length} (${((productsWithImages.length / products.length) * 100).toFixed(1)}%)`);
  console.log(`Produtos com problemas: ${productsWithoutUrl.length + productsWithBrokenImages.length} (${(((productsWithoutUrl.length + productsWithBrokenImages.length) / products.length) * 100).toFixed(1)}%)`);
  console.log('='.repeat(80) + '\n');
}

checkAllProducts().catch(console.error);
