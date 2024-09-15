// Import modules =================
const express = require('express');
const morgan = require('morgan');
// async errors
require('express-async-errors');

// Import local resources
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');
const Product = require('./models/Product');

// Getting Middlewares ================
const errorNotFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

// Setting dotenv ====================
// Setting the enviroment variables to encapsulate the important data
// .config() => reads the content of the .env files and parses the variables, making them accessible in the proccess.env object
require('dotenv').config();

// Server config ===============
const server = express();

// Applying middleware ==============
// express.json() => Built-in middleware function that parses incoming requests with JSON content-type, analyzing them and their datas
server.use(morgan('tiny'));
server.use(express.json());
// applying products router as a middleware function
server.use('/api/v1/products', productsRouter);

// Setting routes ============
server.get('/', (req, res) => {
    res.send('<h1>Welcome to Store API</h1> <a href="/api/v1/products">products route</a>');
    res.end();
});

// Main start API function =================
const port = process.env.PORT || 3000;

server.use(errorNotFound);
server.use(errorHandler);

// Async funtion to start the application and DB connection
const start = async () => {
    try{    
        // connect DB
        await connectDB(process.env.MONGO_URI)
        .then(() => console.log('Connection DB successful.'))
        .catch((err) => console.log(err));
        // Wait for the connectDB funtion
        server.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch(err){
        console.log(err);
    }
}
start();
