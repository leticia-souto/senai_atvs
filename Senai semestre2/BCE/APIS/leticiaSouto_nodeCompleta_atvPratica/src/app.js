import express from "express"

const app = express()

app.use(express.json())

const livros = [
    {
        isbn:1,
        titulo_livro:"Java - Como programar",
        editora:"Saber",
        ano_publicacao:"2002"
    },
    {
        isbn:2,
        titulo_livro:"Java - Como programar de verdade",
        editora:"Saber",
        ano_publicacao:"2008"
    }
]

function buscarLivro(isbn){
    return livros.findIndex(livro => {
        return livro.isbn === Number(isbn)
    })
}

app.get("/", (req,res) => {
    res.status(200).send("Livraria Saber e Cia")
})

app.get("/livros", (req,res) => {
    res.status(200).json(livros)
})

app.get("/livros/:isbn", (req,res) =>{
    const index = buscarLivro(req.params.isbn)
    res.status(200).json(livros[index])
})

app.post("/livros", (req,res) => {
    livros.push(req.body)
    res.status(201).json(req.body)
})

app.put("/livros/:isbn", (req,res) =>{
    const index = buscarLivro(req.params.isbn)

    livros[index].titulo_livro = req.body.titulo_livro
    livros[index].editora = req.body.editora
    livros[index].ano_publicacao = req.body.ano_publicacao

    res.status(200).json(livros[index])
})

app.delete("/livros/:isbn", (req,res) =>{
    const index = buscarLivro(req.params.isbn)
    livros.splice(index, 1)
    res.status(200).json(livros)
})


//////////////////////////////////////////////////////////////////////////////////////

const autor_livro = [
    {
        id_autor_livro:254,
        isbn: 1,
        id_autor:789868
        
    },
    {
        id_autor_livro:185,
        isbn:2,
        id_autor:777555
    }
]

function buscarAutorLivro(id_autor_livro){
    return autor_livro.findIndex(autor_livro => {
        return autor_livro.id_autor_livro === Number(isbn)
    })
}

app.get("/", (req,res) => {
    res.status(200).send("Livraria Saber e Cia")
})

app.get("/livros", (req,res) => {
    res.status(200).json(livros)
})

app.get("/livros/:isbn", (req,res) =>{
    const index = buscarLivro(req.params.isbn)
    res.status(200).json(livros[index])
})

app.post("/livros", (req,res) => {
    livros.push(req.body)
    res.status(201).json(req.body)
})

app.put("/livros/:isbn", (req,res) =>{
    const index = buscarLivro(req.params.isbn)

    livros[index].titulo_livro = req.body.titulo_livro
    livros[index].editora = req.body.editora
    livros[index].ano_publicacao = req.body.ano_publicacao

    res.status(200).json(livros[index])
})

app.delete("/livros/:isbn", (req,res) =>{
    const index = buscarLivro(req.params.isbn)
    livros.splice(index, 1)
    res.status(200).json(livros)
})

//////////////////////////////////////////////////////////////////

const autor = [
    {
        idAutor:254,
        nome_autor: "Paulete",
        nacionalidade: "Indiana"
        
    },
    {
        idAutor:185,
        nome_autor:"Moniquinha",
        nacionalidade:"Polonêsa"
    }
]

function buscarAutor(idAutor){
    return autor.findIndex( bAutor => {
        return bAutor.idAutor === Number(idAutor)
    })
}

app.get("/autor", (req,res) => {
    res.status(200).json(autor)
})

app.get("/autor/:idAutor", (req,res) =>{
    const index = buscarAutor(req.params.idAutor)
    res.status(200).json(autor[index])
})

app.post("/autor", (req,res) => {
    autor.push(req.body)
    res.status(201).json(req.body)
})

app.put("/autor/:idAutor", (req,res) =>{
    const index = buscarAutor(req.params.idAutor)

    autor[index].nome_autor = req.body.nome_autor
    autor[index].nacionalidade = req.body.nacionalidade

    res.status(200).json(autor[index])
})

app.delete("/autor/:idAutor", (req,res) =>{
    const index = buscarAutor(req.params.idAutor)
    autor.splice(index, 1)
    res.status(200).json(autor)
})

//////////////////////////////////////////////////////////////////

const emprestimo = [
    {
        idEmprestimo:555,
        data_emprestimo: "2025-09-18",
        data_devolucao: "2025-09-25",
        data_devolucao_efetiva: "2025-09-26",
        id_exemplar:333,
        id_membro:777
        
    },
    {
        idEmprestimo:444,
        data_emprestimo: "2025-10-30",
        data_devolucao: "2025-11-07",
        data_devolucao_efetiva: "2025-11-05",
        id_exemplar:222,
        id_membro:111
    }
]

function buscarEmprestimo(idEmprestimo){
    return emprestimo.findIndex( bEmprestimo => {
        return bEmprestimo.idEmprestimo === Number(idEmprestimo)
    })
}



//////////////////////////////////////////////////////////////////

const exemplar = [
    {
        id_exemplar:333,
        status_exemplar: "Emprestado",
        isbn: 1
        
        
    },
    {
        id_exemplar:222,
        status_exemplar: "Disponível",
        isbn: 2
    }
]

//////////////////////////////////////////////////////////////////

const membro = [
    {
        id_membro:777,
        nome_autor: "Moniquinha",
        endereco: "Ruas das asas da coxa, 55, Av.das galinhas",
        telefone: "1198753-8822"
        
        
    },
    {
        id_membro:111,
        nome_autor: "Paulete",
        endereco: "Rua das cabras, 77, Av. dos mamiferos",
        telefone: "1198875-3324"
    }
]

export default app