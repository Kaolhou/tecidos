import { readFileSync } from 'fs';

// Read the SQL file
const sqlContent = readFileSync('./update_products.sql', 'utf-8');

// Split by UPDATE statements
const statements = sqlContent
  .split(/(?=UPDATE products SET)/)
  .filter(stmt => stmt.trim().startsWith('UPDATE'))
  .map(stmt => stmt.trim());

console.log(`Total statements to execute: ${statements.length}`);

// Create batches of 30 statements each
const batchSize = 30;
const batches = [];

for (let i = 0; i < statements.length; i += batchSize) {
  const batch = statements.slice(i, i + batchSize).join('\n\n');
  batches.push(batch);
}

console.log(`\nCreated ${batches.length} batches`);
console.log('\n=== BATCH 1 ===');
console.log(batches[0]);
