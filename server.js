const http = require('http');
const port = 3000

const rotas = {
    '/': 'Curso de node',
    '/livros': 'Página de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Página da editora',
    '/sobre': 'Página sobre'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url]);
})

server.listen(port,() => {
    console.log(`servidor escutando em http://localhost:${port}`)
})