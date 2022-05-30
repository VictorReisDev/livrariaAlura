Meu primeiro projeto utilizando NodeJS e Express.

Para iniciar sem utilizar o Express devemos:
* Criar um servidor através da criação do arquivo server.js
* Após instalarmos o nodemon nas dependências de dev (yarn add nodemon -D) do nosso projeto podemos editá-lo em tempo real pois o nodemon 
faz uma espécie de auto-refresh pra gente.

Utilizando o Express:

* Após instalar o express (yarn add express) precisamos adequar o nosso projeto:
* Para isso basta criar a pasta de src e dentro dela o arquivo app.js
* Podemos mudar também o nosso package.json adicionando o item type com o valor "module" ("type":"module") para conseguirmos utilizar o import do express.
* Antes de criarmos as rotas, vamos criar nosso array de objetos json que irá retornar os livros:
const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
]
* No arquivo app.js iremos importar o express (import express from "express") e nele iremos escrever as nossas rotas com uma sintese similiar a:
app.get('/', (req,res) => {
    res.status(200).send('Curso de node');
})
app.get('/livros', (req,res) => {
    res.status(200).json(livros)
})