'use strict';
const express = require('express');
const http = require('http');
const app = express();
const router = express.Router(); //cria um roteador separado dentro do Express. Em vez de adicionar as rotas diretamente no app, podemos modularizar as rotas em um roteador e depois "conectá-lo" ao app.

app.use(express.json());  // Middleware para analisar JSON no corpo das requisições
app.use(express.urlencoded({ extended: true }));

//carregar as rotas
const index = require('./routes/indexRoute');
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
app.use('/', index);
app.use('/Products', product);
app.use('/Users', user);

module.exports = app;