'use strict';

//importa a configuração do .env
require('dotenv').config();

async function connect() {

    //importa a classe Pool da biblioteca pg
    const { Pool } = require('pg');
    //Instancia um pool passando a variavel de ambiente conncetionString
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    const client = await pool.connect();

    //teste de conexão, retorna a hora exata
    const testePool = pool.query('select now()');
    console.log((await testePool).rows[0]);

    console.log("conectado com sucesso");


    client.release();
    return pool.connect();
};

connect();