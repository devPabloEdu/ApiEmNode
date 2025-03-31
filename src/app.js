'use strict'
const express = require('express');
const http = require('http');

const app = express();
const router = express.Router(); //cria um roteador separado dentro do Express. Em vez de adicionar as rotas diretamente no app, podemos modularizar as rotas em um roteador e depois "conectá-lo" ao app.

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store Api",
        version: "0.0.1",
    });
});
app.use('/', route);

module.exports = app;