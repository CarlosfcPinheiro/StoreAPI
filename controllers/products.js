// Creating controllers
const getAllProductsStatic = async (req, res) => {
    res.status(200).json({msg:'products testing route'});
}

const getAllProducts = async (req, res) => {
    res.status(200).json({msg:'products route'});
}

// Exporting controllers
module.exports = {
    getAllProducts,
    getAllProductsStatic,
}
