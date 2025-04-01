'use strict'
const express = require('express');
const http = require('http');

const app = express();
const router = express.Router(); //cria um roteador separado dentro do Express. Em vez de adicionar as rotas diretamente no app, podemos modularizar as rotas em um roteador e depois "conectá-lo" ao app.

app.use(express.json());  // Middleware para analisar JSON no corpo das requisições
app.use(express.urlencoded({extended : true}));

//Rota de listagem de produtos
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store Api",
        version: "0.0.1",
    });
});
app.use('/', route);

//Rota de criação de um produto
const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});
app.use('/Products', create);

//Rota para editar um produto existente
const edit = router.put("/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send({
            return : "o campo não pode ser vazio"
        })
    }
    res.status(200).send({
        id: id,
        item: req.body
    });
});
app.use('/Edit', edit);

//rota para deletar um produto existente
const remove = router.delete("/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send({
            return : "o campo não pode ser vazio"
        })
    }
    res.status(204).send({
        id: id,
        removed: req.body
    });
});
app.use('/Remove', remove);


module.exports = app;