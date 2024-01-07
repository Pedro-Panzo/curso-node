const path = require('path');

//Pegar nome do arquivo que esta ser trabalhodo
console.log(path.basename(__filename));

//Pegar pasta do arquivo que esta ser trabalhado
console.log(path.dirname(__filename))

//Pegar extensão do arquivo que esta ser trabalhado
console.log(path.extname(__filename))

//cria um objeto do arquivo que esta ser trabalhado
console.log(path.parse(__filename))

//adicionar caminho apartir de uma pasta
console.log(path.join(__dirname,"txt","pedro","teka.js"))


