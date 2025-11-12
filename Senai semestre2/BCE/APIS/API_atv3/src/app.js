import express from "express"



const app = express()

app.use(express.json())

const livros = [
    {
        isbn:1,
        titulo_livro:" Java - Como programar",
        editora:"Saber",
        ano_publicacao:"2002",

    },
    {
        isbn:2,
        titulo_livro:" Moniquinha - Como passar na COMVEST",
        editora:"ROCCQUEIRO",
        ano_publicacao:"2026",

    }
]

/*função para achar o valor do isbn */
function buscarLivro(isbn){
    return livros.findIndex(livro => {
        return livro.isbn === Number(isbn)
    }) 
}

/*sempre necessário usar res.status*/
app.get("/", (req, res) => {
    res.status(200).send ("Biblioteca Saber e Cia")
    res.json()
})

/* get para exibir os livros*/
app.get("/livros", (req,res) => {
    res.status(200).json(livros)
})


/*para colar um parametro dentro do caminho é só colocar :(nome do parametro)*/
app.get("/livros/:isbn", (req,res) =>{
    /*criado para achar um caminho específico*/
    const index = buscarLivro(req.params.isbn)
    /*informação de um livro específico.*/
    res.status(200).json(livros[index])
}) 

app.post ("/livros", (req,res) => {
    livros.push(req.body)
    res.status(201).json(req.body)
})

/* usado para poder modificar uma informação */
app.put ("/livros/:isbn", (req,res) => {
    /*traz o indice da constante de livros onde está p isbn */
    const index = buscarLivro(req.params.isbn)
    /*está acessando o array, especificando os atributos */
    livros[index].titulo_livro = req.body.titulo_livro
    livros[index].editora = req.body.editora
    livros[index].ano_publicacao = req.body.ano_publicacao

    res.status(200).json(livros[index])

})
export default app