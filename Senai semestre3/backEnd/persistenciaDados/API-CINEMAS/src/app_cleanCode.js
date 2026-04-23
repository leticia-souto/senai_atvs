//Exercício 1 - Usuários

//PODE SER ASSIM
// const validarDados = (resultado, res, tipo) =>{
//     if(resultado.length === 0){
//         res.status(404).json({
//             sucesso: false,
//             mensagem: `${tipo} não encontrado(a).`
//         })
//     }
// }

//OU ASSIM
function mensagem(res, tipo) {
    res.status(404).json({
        sucesso: false,
        mensagem: `${tipo} não encontrado(a).`
    })
}

function validarDados(resultado, res, tipo) {
    if (resultado.length === 0) {
        mensagem(res, tipo)
        return false
    }
    return true
}

app.get('/usuario', async (req, res) => {
    try {
        const listaUsuarios = await queryAsync("SELECT * FROM usuario")
        res.status(200).json({
            sucesso: true,
            id: listaUsuarios,
        })

    } catch (erro) {
        res.status(500).json({
            sucesso: false,
            mensagem: erro
        })
    }

})

app.get('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params

        const usuario = await queryAsync("SELECT * FROM usuario WHERE id = ?", [id])

        if (!validarDados(usuario, res, "Usuário")) {
            return
        }

        res.status(200).json({
            sucesso: true,
            dados: usuario[0]
        })

    } catch (erro) {
        req.status(500).json({
            sucesso: false,
            mensagem: erro
        })
    }

})

//Exercício 2 - Pedidos
const validarDadosPedido = ({ cliente, valor }) => {
    if (!cliente || valor === undefined) {
        return "Valor e cliente são obrigatórios!"
    }

    if (typeof valor !== 'number' || valor <= 0) {
        return "Valor inválido!"
    }

    return null
}

app.post('/pedidos', async (req, res) => {
    try {
        const erro = validarDadosPedido(req.body)

        if (erro) {
            return res.status(400).json({
                sucesso: false,
                mensagem: erro
            })
        }

        await queryAsync("INSERT INTO pedido SET ?", [req.body])

        res.status(201).json({
            sucesso: true,
            mensagem: "Pedido cadastrado com sucesso!"

        })

    } catch (erro) {
        req.status(500).json({
            sucesso: false,
            mensagem: erro
        })

    }
})

//Exercício 3 - Salas

const validarAtualizacao = (dados, res) => {
    if(Object.keys(dados).length === 0){
        res.status(400).json({
            sucesso: false,
            mensagem: "Nenhum dado para atualizar."
        })
        return false
    }
    return true
}

app.put('/salas/:id', async (req, res) => {
    try {
        const id = req.params
        const dados = validarAtualizacao (req.body)

        const sala = await queryAsync("SELECT * FROM sala WHERE id = ?", [id])

        if (!validarDados(sala, res, "Sala")) {
            return
        }

        if (!validarAtualizacao(dados, res)) {
            return
        }

        await queryAsync("UPDATE sala SET ? WHERE id = ?", [dados, id])

        res.status(200).json({
            sucesso: true,
            mensagem: "Sala atualizada com sucesso!"
        })

    } catch (erro) {
        req.status(500).json({
            sucesso: false,
            mensagem: erro
        })

    }
})



app.delete('/salas/:id', async (req, res) => {
    try {
        const id = req.params

        const sala = await queryAsync("SELECT * FROM sala WHERE id = ?", [id])

        if (!validarDados(sala, res, "Sala")) {
            return
        }

        await queryAsync("DELETE FROM sala WHERE id = ?", [id])

        res.status(200).json({
            sucesso: true,
            mensagem: "Sala apagada com sucesso."
        })

    } catch (erro) {
        req.status(500).json({
            sucesso: false,
            mensagem: erro
        })

    }
})