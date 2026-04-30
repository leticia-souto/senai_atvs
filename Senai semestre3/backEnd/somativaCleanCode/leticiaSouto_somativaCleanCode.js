// =============================================================================
// ROTA DE AGENDAMENTOS
// =============================================================================
function mensagem(res, tipo){
    res.status(404).json({
        sucesso: false,
        mensagem:`${tipo} não encontrado(a).`
    })
}

function validarDados (resultado, res, tipo){
    if(resultado.length === 0){
        mensagem(res,tipo)
        return false
    }
    return true
}
function validarAtualizacao (dados, res){
    
    if (Object.keys(dados).length === 0) {
        res.status(400).json({
            sucesso: false,
            mensagem: "Nenhum dado para atualizar."
        })
        return false
    }
    return true
}

function validarData({data}){
    if(data != "" || data != Date){
        return "Data Inválida"
    }
    return null
}


app.put('/reserva/alt/:id_res', async (req, res) => {
    try{
        
    const id = req.params.id_res
    const dados = validarAtualizacao (req.body)
    const erroData = validarData(req.body)

    
    const reserva = await queryAsync("SELECT * FROM reservas WHERE id = ?", [id])
    
    if(!validarDados(reserva, res, "Reserva")){
        return
    }

    if (!validarData(erroData)){
        return
    }

    if (!validarAtualizacao(dados, res)) {
        return

    }
    await queryAsync("UPDATE reservas SET ? WHERE id = ?", [dados, id])

    res.status(200).json({
        sucesso: true,
        mensagem: "Reserva Atualizada com sucesso!"
    })
        
    } catch(erro){
        req.status(500).json({
            sucesso: false,
            mensagem: erro
        })
    }
    
})

