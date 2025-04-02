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
        return {message: "Produto deletado com sucesso"};
    },

    async updateProduct(productId, productName, productPrice) {
        const client = await global.connection;
        const updatedProduct = await client.query('UPDATE product SET productName = ($1), productPrice = ($2) WHERE productId = ($3) RETURNING *', [productName ,productPrice, productId]);
        return updatedProduct.rows[0];
    }
};

module.exports = productModel;