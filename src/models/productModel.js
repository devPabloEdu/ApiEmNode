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
    }
};

module.exports = productModel;