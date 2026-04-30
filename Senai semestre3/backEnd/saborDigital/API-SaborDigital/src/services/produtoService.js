const ProdutoRepository = require('../repositories/produtoRepository')

class ProdutoService {
    async listarProdutos() {
        const produtos = await ProdutoRepository.listarProdutos()

        return {
            sucesso: true,
            dados: produtos,
            total: produtos.length
        }
    }

    async burcarProdutosPorId(id) {
        if (!id || isNaNI(id)) {
            throw {
                status: 400,
                mensagem: 'ID inválido'
            }
        }

        const produto = await ProdutoRepository.burcarProdutosPorId(id)

        if(!produto){
            throw{
                status: 404,
                mensagem: 'Produto não encontrado.'
            }
        }

        return{
            sucesso: true,
            dados: produto[0]
        }
    }
}