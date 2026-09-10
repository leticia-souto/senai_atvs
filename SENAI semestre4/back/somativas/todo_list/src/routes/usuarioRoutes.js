const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const { authMiddleware, authAdminMiddleware } = require('../middlewares/authMiddleware');
const { verify } = require('jsonwebtoken');



router.post('/registrar', UsuarioController.registrar);
router.post('/login', UsuarioController.login);
router.get('/', UsuarioController.verify(authMiddleware, authAdminMiddleware).listar);
router.delete('/:id/', UsuarioController.verify(authMiddleware, authAdminMiddleware).deletar);
router.use(authMiddleware)
router.use(authAdminMiddleware)
module.exports = router;
