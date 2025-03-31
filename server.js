'use strict';

const http = require('http');
const express = require('express');
const { title } = require('process');
const { version } = require('os');
const debug = require('debug')('nodestr:server');

const app = express();
const port = 3000;
app.set('port', port); //define a key port com o value port, que pode ser referenciado depois dentro do código

const server = http.createServer(app);// Cria o servidor HTTP e passa a instância do Express como argumento
const router = express.Router(); //cria um roteador separado dentro do Express. Em vez de adicionar as rotas diretamente no app, podemos modularizar as rotas em um roteador e depois "conectá-lo" ao app.
server.listen(port); //utiliza a instancia server e define que o metodo listen recebe como parametro a constante Port definida anteriormente

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store Api",
        version: "0.0.1"
    });
});
app.use('/', route);

console.log(`o servidor est[a rodando na porta ${port}`);