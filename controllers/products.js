// Importing the model
const Product = require('../models/Product');

// Creating controllers
const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({
        name: 'vase table', // testing
    });
    res.status(200).json({products, searchCount: products.length});
}

const getAllProducts = async (req, res) => {
    // The type of data Boolean is recived at string, then it is necessary to convert it
    const {featured, company} = req.query;
    const queryObject = {};
    if (featured){
        queryObject.featured = (featured === 'true' ? true : false);
    } if (company){
        queryObject.company = company;
    }

    const products = await Product.find(queryObject);
    res.status(200).json({products, searchCount: products.length});
}

// Exporting controllers
module.exports = {
    getAllProducts,
    getAllProductsStatic,
}
