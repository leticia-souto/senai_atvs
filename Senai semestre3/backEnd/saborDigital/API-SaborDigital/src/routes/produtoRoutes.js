const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')

router.get('/', ProdutoController.listarProduto)
router.get('/:id', ProdutoController.buscarProdutoPorId)
router.post('/', ProdutoController.cadastrarProduto)
router.put('/:id', ProdutoController.atualizarProduto)
router.delete('/:id', ProdutoController.deletarProduto)

router.get('/', (req, res) => {
    res.json({
        mensagem: 'API Sabor Digital',
        versao: '5.0.8'
    })
})

router.use('/produtos', produtoRoutes)
router.use('/pedidos', pedidoRoutes)
router.use('/cardapios', cardapioRoutes)

module.exports = router;