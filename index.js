const fs = require('fs');

console.log('Nuestro primer programa fuera del navegador');

const mensaje = 'Este mensaje aparecerá en el archivo si es que no necesitamos NPM';

fs.writeFileSync('EstamosProbando.txt', mensaje);