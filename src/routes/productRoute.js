'use strict';

const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productController');

//Rota para listar todos os produtos
router.get('/ListProducts', productControllers.get);

//Rota para buscar um produto por Id
router.get('/ListProducts/:productId', productControllers.getById);

//Rota de criação de um produto
router.post('/Create', productControllers.post);

//Rota para editar um produto existente
router.put("/Edit/:productId", productControllers.put);

//rota para deletar um produto existente
router.delete('/Remove/:productId', productControllers.delete);

module.exports = router;
