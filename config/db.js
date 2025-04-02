'use strict';

//importa a configuração do .env
require('dotenv').config();

async function connect() {
    //verifica se já existe alguma conexão em aberto
    if (global.connection) { return global.connection.connect() };

    //importa a classe Pool da biblioteca pg
    const { Pool } = require('pg');
    //Instancia um pool passando a variavel de ambiente conncetionString
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    const client = await pool.connect();

    //teste de conexão, retorna a hora exata
    const testePool = await client.query('select now()');
    console.log(testePool.rows[0]);

    console.log("conectado com sucesso");

    client.release();

    //armazena o pool de conexão em uma variavel de escopo global
    global.connection = pool;

    return pool.connect();
};

connect();