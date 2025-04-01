'use strict'
const express = require('express');
const http = require('http');

const app = express();
const router = express.Router(); //cria um roteador separado dentro do Express. Em vez de adicionar as rotas diretamente no app, podemos modularizar as rotas em um roteador e depois "conectá-lo" ao app.

app.use(express.json());  // Middleware para analisar JSON no corpo das requisições

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store Api",
        version: "0.0.1",
    });
});
app.use('/', route);

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});
app.use('/Products', create);


module.exports = app;