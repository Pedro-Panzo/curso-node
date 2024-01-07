const http = require('http');

const port = 8080;

const server = http.createServer((req,res) => {
    if(req.url == '/home'){
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.end("<h1>Home Page</h1>");
    }

    if(req.url == "/users"){
        res.writeHead(200,{"Content-Type" : "application/json"});
        
        const usuarios = [{
            nome: "Pedro",
            idade: 22
        },
        
        {
        nome: "Teka",
        idade: 21,
        }];
        res.end(JSON.stringify(usuarios));
    }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));