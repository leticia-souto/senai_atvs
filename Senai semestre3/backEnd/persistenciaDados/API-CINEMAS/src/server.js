const pool = require('./config/database')
const app = require('./app')

const PORT = 3000

pool.getConnecrion((err, connection) => {
    if(err){
        console.error("Erro ao conectar ao banco: ", err)
        process.exit(1)
    }

    console.log('conectado ao MySQL')
    connection.realease()
})

app.listen(PORT, ()=> {
    console.log('Servior Rodando!!!')
})