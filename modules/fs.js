const { error } = require('console');
const fs = require('fs');
const path = require('path');


//criar uma pasta
fs.mkdir(path.join(__dirname,'/teste'),(error) =>{
    if(error){
        return console.log(error);
    }
    console.log('Pasta criada');
})

//criar uma arquivo
fs.writeFile(path.join(__dirname,'/teste','/ficheiro.txt'),"Node js",(error) =>{
    if (error){
        return console.log(error);
    }
    console.log('Ficheiro criado com êxito');
})


//Adicionar conteudo no arquivo
fs.appendFile(path.join(__dirname,'/teste','/ficheiro.txt'),"Nova linha",(error) =>{
    if (error){
        return console.log(error);
    }
    console.log('Ficheiro criado com êxito');
})


//Ler arquivo
fs.readFile(path.join(__dirname,'/teste','/ficheiro.txt'),"UTF-8",(error,data) =>{
    if (error){
        return console.log(error);
    }
    console.log(data);
})
