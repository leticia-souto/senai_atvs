import express from 'express'

const pt = express()

const produtos = ["Arroz"]

pt.use(express.json())

pt.get('/produtinhos', (req, res) => {
    res.status(200).json(produtos)
})

pt.post('/produtinhos', (req, res) => {
    produtos.push(req.body)

    res.status(201).json(req.body)
})

pt.listen(5000, () => console.log('Servidor Rodando!'))