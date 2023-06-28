const { productsServices } = require('../services');

const allProducts = async (_req, res) => {
  const { data } = await productsServices.getAllProducts();

  return res.status(200).json(data);
}; 

const productById = async (req, res) => {
  const { id } = req.params;
  const { data } = await productsServices.getProductById(Number(id));

  return res.status(200).json(data);
};

module.exports = {
  allProducts,
  productById,
};