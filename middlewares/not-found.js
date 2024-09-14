// Error used to send a standard message to not configured endpoints
const errorNotFound = (req, res) => {
    res.status(404).send('Route does not exist.');
}

// Exporting error
module.exports = errorNotFound;