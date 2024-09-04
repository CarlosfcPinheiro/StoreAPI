// Import modules
const express = require('express');

// Getting Middlewares
const errorNotFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

// async errors

// Setting dotenv
require('dotenv').config()

// Server config
const server = express();
const port = 3000;

// Applying middleware
// express.json() => Built-in middleware function that parses incoming requests with JSON content-type, analyzing them
server.use(express.json());


server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});