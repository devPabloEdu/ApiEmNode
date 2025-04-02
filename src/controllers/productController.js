'use strict';

const express = require('express');
const http = require('http');
const router = express.Router();
const productModel = require('../models/productModel');

exports.get = async (req, res, next) => {
    const productsList = await productModel.listProduct();
    res.status(200).send(productsList);
};

exports.post = (req, res, next) => {
    const { productName, productPrice } = req.body;
    const newProduct = productModel.createProduct(productName, productPrice);
    res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
    const id = parseInt(req.params.id);
    if (!id) {
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
    if (!id) {
        return res.status(400).send({
            error: "O campo não pode ser Nullo ou vazio"
        });
    };
    res.status(204).send({
        id: id,
        removed: res.body
    });
};