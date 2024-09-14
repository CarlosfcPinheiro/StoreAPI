// Importing modules ===========================
const connectDB = require('./db/connect');
// importing the documents model
const Product = require('./models/Product');
// importing json products
const jsonProducts = require('./products');

// Getting the enviroment variable
require('dotenv').config();

const start = async () => {
    try{
        // Call connectDB function
        await connectDB(process.env.MONGO_URI);
        // model.deletedMany() => method to delete all documents on the database/collection
        await Product.deleteMany();
        // model.create() => method to create documents
        await Product.create(jsonProducts);
        console.log('Populating database complete!');

        // process.exit() => global process object's that containt exit method to pause an process
        // 0 => success end
        // 1 => failure end
        process.exit(0);
    } catch(err){
        console.log(err);
        process.exit(1);
    }
}
start();