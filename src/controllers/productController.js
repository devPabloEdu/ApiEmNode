'use strict';

const express = require('express');
const http = require('http');
const router = express.Router();

exports.get = (req, res, next) => {
    res.status(200).send({
        produto: "maquina de lavar",
        preco: "30,00"
    });
};

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
    const id = parseInt(req.params.id);
    if(!id){
        return res.status(400).send({
            error: "o campo não pode ser vazio"
        });
    };
    res.status(201).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    const id = parseInt(req.params.id);
    if(!id){
        return res.status(400).send({
            error: "O campo não pode ser Nullo ou vazio"
        });
    };
    res.status(204).send({
        id: id,
        removed: res.body
    });
};