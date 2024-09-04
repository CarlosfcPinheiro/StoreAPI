// Import modules
const express = require('express');

// Server config
const server = express();
const port = 3000;

server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
