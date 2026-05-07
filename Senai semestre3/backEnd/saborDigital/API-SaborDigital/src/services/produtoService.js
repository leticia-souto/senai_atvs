const produtoRepository = require('../repositories/produtoRepository')
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

        if (!produto) {
            throw {
                status: 404,
                mensagem: 'Produto não encontrado.'
            }
        }

        return {
            sucesso: true,
            dados: produto[0]
        }
    }

    async cadastrarProduto(dados) {
        const { nome, descricao, preco, categoria, disponivel } = dados

        if (!nome || !descricao || preco === undefined) {
            throw {
                status: 400,
                mensagem: "Nome, descrição e preço são obrigatórios."
            }
        }

        if (typeof preco !== Number || preco <= 0) {
            throw {
                status: 400,
                mensagem: "Preço deve ser um número positivo."
            }
        }

        const novoProduto = {
            nome: nome.trim(),
            descricao: descricao.trim(),
            preco,
            categoria: categoria || null,
            disponivel: disponivel || true
        }

        const resultado = await ProdutoRepository.cadastrarProduto(novoProduto)

        return {
            sucesso: true,
            mensagem: 'Produto cadastrado com sucesso!',
            resultado
        }
    }

    async atualizarProduto(id, dados) {
        if (!id || isNaN(id)) {
            throw {
                status: 400,
                mensagem: "id inválido."
            }
        }

        //busca as informações de produto no banco por id e salva em produtoId
        const produtoId = await ProdutoRepository.burcarProdutosPorId(id)

        if (produtoId.length === 0) {
            throw {
                status: 404,
                mensagem: "Produto não encontrado."
            }
        }

        const produtoAtualizado = {}

        const { nome, descricao, preco, categoria, disponivel } = dados

        //pode ser assim tb
        //if(nome !== undefined && nome.trim().lenght > 0) produtoAtualizado.nome = nome.trim()
        if (nome !== undefined || nome.trim() !== "") produtoAtualizado.nome = nome.trim()
        
            if (descricao !== undefined) produtoAtualizado.descricao = descricao.trim()
        if (preco !== undefined) {
            if (typeofpreco !== 'number' || preco <= 0) {
                throw {
                    status: 400,
                    mensagem: 'Preço deve ser um número positivo.'
                }
            }
        }
        produtoAtualizado.preco = preco

        if (categoria !== undefined) produtoAtualizado.categoria = categoria
        if (disponivel !== undefined) produtoAtualizado.disponivel = disponivel

        if (Object.keys(produtoAtualizado.length) === 0) {
            throw {
                status: 400,
                mensagem: "Nenhum dado para atualizar."
            }
        }

        await ProdutoRepository.atualizarProduto(id, produtoAtualizado)

        return {
            sucesso: true,
            mensagem: 'Produto Atualizado.'
        }
    }

    async deletarProduto(id) {
        if (!id || isNaN(id)) {
            throw {
                status: 400,
                mensagem: 'id inválido'
            }
        }

        const produtoId = await ProdutoRepository.burcarProdutosPorId(id)

        if (!produtoId.length === 0) {
            throw {
                status: 404,
                mensagem: 'Produto não encontrado.'
            }
        }

        await ProdutoRepository.apagarProduto(id)

        return{
            sucesso: true,
            mensagem: 'Produto Apagado.'
        }
    }

}

module.exports = new ProdutoService()