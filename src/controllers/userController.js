'use strict';

const express = require('express');
const userRouter = express.Router();

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
    const id = parseInt(req.params.Userid);
    if(!id){
        res.status(400).send({
            error: "O campo não pode ser nullo ou vazio"
        });
    };
    res.status(201).send({
        id:id,
        ModificateddUser: req.body
    });
};

exports.delete = (req, res, next) => {
    const id = parseInt(req.params.Userid);
    if(!id){
        res.status(400).send({
            error:"O id não pode ser nullo ou inexistente"
        });
    };
    res.status(204).send({
        idRemovido: id,
    });
};