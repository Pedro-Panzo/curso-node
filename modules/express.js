const express = require('express');

const app = express();


app.get('/home',(req,res) =>{
    res.contentType('text/html');
    res.status(200).send("<h1> Um texto simples. </h1>");
});

app.get('/users',(req,res) =>{
    res.contentType('application/json');

    const user = [{nome:'pier'},{nome:'Mingo'},{nome:'Filipe'}];

    res.status(200).json(user);
});

const port = 8080;
app.listen(port, ()=>{
    console.log('Rodando na porta '+port);
})