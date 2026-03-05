// const express = require('express')
// const pool = require('./config/database')

// const app = express()

// app.use(express.json())

// app.get('./', (req,res) => {
//     res.send('API CINEMA')
// })

// app.get('./filmes', (req, res) => {
//     pool.query('SELECT 8 FROM filmes', (err, results) => {
//         res.json(results)
//     })
// })

// module.exports = app

const express = require('express')
const pool = require('./config/database')

const app = express()
app.use(express.json())

const queryAsync = (sql, values = [])=> {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (err, results) =>{
            if(err) reject(err)
            else resolve(results)
        })
    })
}

app.get('/', (req,res) => {
    res.send("API CINEMA")
})

// app.get('/filmes', (req,res) => {
//     pool.query('SELECT * FROM filme', (err, results) =>{
//         res.json(results)
//     })
// })

app.get('/filmes', async(req, res) => {
    try{
        const filmes = await queryAsync('SELECT * FROM filme')
            res.json({
                sucesso: true, 
                dados : filmes,
                total: filmes.length
            })
        } catch (erro){
        console.error(`Erro ao listar os filmes ${erro}`)
        res.status(500).json({
            sucesso: false,
            mensagem:'Erro ao listar filmes',
            erro: erro.mensagem
        })
        }
    })

// app.get('/filmes/:id', (req,res) => {
//     const {id} = req.params

//     pool.query('SELECT * FROM filme WHERE id = ?', [id],(err, results) =>{
//         res.json(results)
//     })

// })

app.get('/filmes/:id', async(req, res) => {
    try{
        const{id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: `Filme não encontrado`
            })
        }

        res.json({
            sucesso: true,
            dados: filme[0]
        })

    } catch (erro){
        console.error(`Erro ao encontrar os filmes ${erro}`)
        res.status(500).json({
            sucesso: false,
            mensagem:'Erro ao encontrar filme',
            erro: erro.mensagem
        })

    }
})


module.exports = app