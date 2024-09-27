// Importing the model
const Product = require('../models/Product');
// const { search } = require('../routes/products');

// Creating controllers =======================
// Testing controller
const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({
        // testing
    }).sort('-price');
    // Query.sort() => recives another query param as a function param to sort the order of the response data 
    res.status(200).json({products, searchCount: products.length});
}

// GET all products in the endpoint '/products'
const getAllProducts = async (req, res) => {
    // The type of data Boolean is recived at string, then it is necessary to convert it
    // {a, b, c} = object.values => 'object destructuring' that means the object attributes (a, b and c) will be destructured and assigned to the equivalent variable names (a, b and c)
    const {featured, company, name} = req.query;
    const queryObject = {};
    // Checking if the values exists on each object
    if (featured){
        queryObject.featured = (featured === 'true' ? true : false);
    } if (company){
        queryObject.company = company;
    } if (name){
        queryObject.name = {$regex: name, $options:'i'};
        // What a magic!
    }
    // In the final, queryObject = {featured: x, company: y, name: z} (not necessarily with all attributes)
    console.log(queryObject);
    // Model.finder() => recives an filter object to match with the object data, returning a Query object
    let result = Product.find(queryObject);
    if (sort){
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    }
    const products = await result;
    res.status(200).json({products, productsCount: products.length});
}

// Exporting controllers
module.exports = {
    getAllProducts,
    getAllProductsStatic,
}
