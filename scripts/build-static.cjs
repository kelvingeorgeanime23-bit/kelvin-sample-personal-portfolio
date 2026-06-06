const fs = require('fs');
const path = require('path');

const distClient = path.join(__dirname, '..', 'dist', 'client');
const assetsDir = path.join(distClient, 'assets');

const files = fs.readdirSync(assetsDir);
const cssFile = files.find(f => f.endsWith('.css'));
const jsFiles = files.filter(f => f.endsWith('.js')).sort();

const cssLink = cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : '';
const scripts = jsFiles.map(f => `<script type="module" src="/assets/${f}"></script>`).join('\n  ');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kelvin George Nderi — Developer. Designer. Builder.</title>
  <meta name="description" content="Portfolio of Kelvin George Nderi, a Nairobi-based developer and designer building Android apps, web platforms and creative experiments.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  ${cssLink}
</head>
<body>
  <div id="root"></div>
  ${scripts}
</body>
</html>`;

fs.writeFileSync(path.join(distClient, 'index.html'), html);
console.log('Generated dist/client/index.html');
