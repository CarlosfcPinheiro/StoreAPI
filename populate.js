// Importing modules
const mongoose = require('mongoose');
const connectDB = require('./db/connect');

const Product = require('./models/Product');

// Getting the enviroment variable
require('dotenv').config();

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        console.log('Ready to populate DataBase!');
    } catch(err){
        console.log(err);
    }
}
start();