const errorNotFound = (req, res) => {
    res.status(404).send('Route does not exist.');
}

// Exporting error
module.exports = errorNotFound;