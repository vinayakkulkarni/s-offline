import { readFileSync, writeFileSync } from 'node:fs';

// read file into JSON
const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));
const readme = readFileSync('README.md', 'utf-8');
const license = readFileSync('LICENSE', 'utf-8');

// write it to your output directory
writeFileSync('./dist/package.json', JSON.stringify(pkg, null, 2));
writeFileSync('./dist/README.md', readme);
writeFileSync('./dist/LICENSE', license);
