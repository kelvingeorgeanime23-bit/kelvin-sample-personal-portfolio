const fs = require('fs');
const path = require('path');

const distClient = path.join(__dirname, '..', 'dist', 'client');
const assetsDir = path.join(distClient, 'assets');

// Read asset files
const files = fs.readdirSync(assetsDir);
const cssFile = files.find(f => f.endsWith('.css'));
const jsFiles = files.filter(f => f.endsWith('.js'));

// Build HTML
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kelvin's Portfolio</title>
  <meta name="description" content="Kelvin's personal portfolio website">
  ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : ''}
</head>
<body>
  <div id="app"></div>
  ${jsFiles.map(f => `<script type="module" src="/assets/${f}"></script>`).join('\n  ')}
</body>
</html>`;

// Write to dist/client/index.html
fs.writeFileSync(path.join(distClient, 'index.html'), html);
console.log('Generated dist/client/index.html');
