'use strict';

const express = require('express');
const http = require('http');
const router = express.Router();
const productModel = require('../models/productModel');

exports.get = async (req, res, next) => {
    const productsList = await productModel.listProduct();
    res.status(200).send(productsList);
};

exports.getById = async (req, res, next) => {
    const productById = await productModel.getProductById(req.params.productId);
    res.status(200).send(productById);
};

exports.post = (req, res, next) => {
    const { productName, productPrice } = req.body;
    const newProduct = productModel.createProduct(productName, productPrice);
    res.status(201).send(req.body);
};

exports.delete = async (req, res, next) => {
    await productModel.deleteProduct(req.params.productId);
    res.status(204).send({ message: "Produto deletado com sucesso" });
};

//por boas praticas, geralmente utilizam o verbo patch também para atualizações
exports.put = async (req, res, next) => {
    const { productName, productPrice } = req.body;
    const productId = req.params.productId;
    const updateNewProduct = await productModel.updateProduct(productId, productName, productPrice);
    res.status(201).json(updateNewProduct);
};

exports.productsByPrice = async (req, res, next) => {
    const { productPrice } = req.body;
    const listByPrice = await productModel.filtredByPrice(productPrice);
    res.status(200).send(listByPrice);
};

exports.productsByLetter = async (req, res, next) => {
    const { productName } = req.body;
    const listByName = await productModel.filtredByLetters(productName);
    res.status(200).send(listByName);
};


