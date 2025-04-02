'use strict';

const http = require('http');
const express = require('express');
const debug = require('debug')('nodestr:server');
const app = require("./src/app");
const db = require('./src/config/db');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port); //define a key port com o value port, que pode ser referenciado depois dentro do código

try {
    const server = http.createServer(app);// Cria o servidor HTTP e passa a instância do Express como argumento
    server.listen(port); //utiliza a instancia server e define que o metodo listen recebe como parametro a constante Port definida anteriormente
    console.log(`o servidor está rodando na porta ${port}`);
} catch (error) {
    console.error(`Erro ao Iniciar o Servidor: ${error.message}`);
    process.exit(1)
}

//serve para garantir que a porta usada pelo servidor seja válida e compatível
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }

    return false
};