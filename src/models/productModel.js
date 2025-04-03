const pool = require('../config/db');

const productModel = {
    async createProduct(productName, productPrice) {
        const client = await global.connection;
        const resultQuery = await client.query(
            'INSERT INTO product (productName, productPrice) VALUES ($1, $2) RETURNING *', [productName, productPrice]
        );
        return resultQuery.rows[0];
    },

    async listProduct() {
        const client = await global.connection;
        const resultQuery = await client.query('SELECT * FROM product');
        return resultQuery.rows;
    },

    async getProductById(productId) {
        const client = await global.connection.connect();
        const resultQuery = await client.query('SELECT * FROM product WHERE productId = ($1)', [productId]);
        client.release();
        return resultQuery.rows[0];
    },

    async deleteProduct(productId) {
        const client = await global.connection.connect();
        await client.query('DELETE FROM product WHERE productId = ($1)', [productId]);
        client.release();
        return { message: "Produto deletado com sucesso" };
    },

    async updateProduct(productId, productName, productPrice) {
        const client = await global.connection;
        const updatedProduct = await client.query('UPDATE product SET productName = ($1), productPrice = ($2) WHERE productId = ($3) RETURNING *', [productName, productPrice, productId]);
        return updatedProduct.rows[0];
    },

    //listando produtos por preço, seleciona os produtos que tem o valor menor que o valor passado no body da requisição
    async filtredByPrice( productPrice) {
        const client = await global.connection.connect();
        const listByPrice = await client.query('SELECT * FROM product WHERE productPrice < ($1)', [productPrice]);
        client.release();
        return listByPrice.rows;
    },

    //filtra a palavra no banco, ele tenta identificar se em algum lugar do banco existe um nome com aqueles caracteres informados
    async filtredByLetters(productName) {
        const client = await global.connection.connect();
        const listByLetter = await client.query('SELECT * FROM product WHERE productName ILIKE ($1)', [`%${productName}%`]);
        client.release();
        return listByLetter.rows;
    }
};

module.exports = productModel;