const http = require('http')

const server = http.createServer((req, res) =>{ 
    res.writeHead(200, {'content-Type' : 'text/plain'});
    res.end('Ola,back-end');
})

server.listen(3000, () => { 
    console.log('Servidor rodando na porta 3000');
});
