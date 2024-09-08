// Import modules
const express = require('express');
// Creating Rotuer object
const Router = express.Router();

// Import controllers
const {
    getAllProducts,
    getAllProductsStatic,
} = require('../controllers/products');

Router.route('/').get(getAllProducts);
Router.route('/static').get(getAllProductsStatic);

// Exporting router
module.exports = Router;