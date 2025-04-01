'use strict';

const express = require('express');
const router = express.Router();

//Rota de criação de um produto
router.post('/Create', (req, res, next) => {
    res.status(201).send(req.body);
});

//Rota para editar um produto existente
router.put("/Edit/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send({
            return: "o campo não pode ser vazio"
        })
    }
    res.status(200).send({
        id: id,
        item: req.body
    });
});

//rota para deletar um produto existente
router.delete("/Remove/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send({
            return: "o campo não pode ser vazio"
        })
    }
    res.status(204).send({
        id: id,
        removed: req.body
    });
});

module.exports = router;
