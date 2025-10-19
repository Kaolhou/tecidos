import { readFileSync } from 'fs';

// Read the txt file
const content = readFileSync('./src/assets/Tecidos desc.txt', 'utf-8');
const lines = content.split('\n');

const products = [];
let currentProduct = null;
let compositionLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  // Skip empty lines and separator lines
  if (!line || /^-+$/.test(line) || line === 'Tecidos') {
    continue;
  }

  // Check if it's a composition line (contains %)
  if (line.includes('%')) {
    compositionLines.push(line);
    continue;
  }

  // Check if it's a width line
  if (line.toLowerCase().includes('largura')) {
    if (currentProduct) {
      // Extract width value (e.g., "1.40m" or "1,50m")
      const widthMatch = line.match(/(\d+[.,]\d+)\s*m/);
      currentProduct.width = widthMatch ? widthMatch[1].replace(',', '.') + 'm' : null;
    }
    continue;
  }

  // Check if it's a price line
  if (line.includes('$')) {
    if (currentProduct) {
      // Extract price value (e.g., "$19.90" or "$19,90")
      const priceMatch = line.match(/\$\s*(\d+[.,]\d+)/);
      if (priceMatch) {
        currentProduct.price = parseFloat(priceMatch[1].replace(',', '.'));
      }

      // Save current product
      if (compositionLines.length > 0) {
        currentProduct.material = compositionLines.join(' ');
        currentProduct.description = `${compositionLines.join(' ')}. ${currentProduct.width} de largura. ${line}`;
      }
      products.push(currentProduct);

      // Reset for next product
      currentProduct = null;
      compositionLines = [];
    }
    continue;
  }

  // If we reach here, it's a product name
  currentProduct = {
    name: line,
    material: null,
    width: null,
    price: null,
    description: null
  };
}

// Generate SQL UPDATE statements
console.log('-- SQL UPDATE statements for products');
console.log('-- Total products parsed:', products.length);
console.log('');

for (const product of products) {
  const safeName = product.name.replace(/'/g, "''");
  const safeMaterial = product.material ? product.material.replace(/'/g, "''") : '';
  const safeDescription = product.description ? product.description.replace(/'/g, "''") : '';

  console.log(`UPDATE products SET`);
  console.log(`  description = '${safeDescription}',`);
  console.log(`  price = ${product.price},`);
  console.log(`  width = '${product.width}',`);
  console.log(`  material = '${safeMaterial}'`);
  console.log(`WHERE name ILIKE '${safeName}';`);
  console.log('');
}

console.log('-- Summary:');
console.log(`-- Total products to update: ${products.length}`);
