const { productsServices } = require('../services');

const allProducts = async (_req, res) => {
  const { data } = await productsServices.getAllProducts();

  return res.status(200).json(data);
}; 

const productById = async (req, res) => {
  const { id } = req.params;
  const { data } = await productsServices.getProductById(Number(id));

  if (!data) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(200).json(data);
};

const newProduct = async (req, res) => {
  const { newData } = req.body;
  const { data } = await productsServices.postNewProduct(newData);

  return res.status(201).json(data);
};

module.exports = {
  allProducts,
  productById,
  newProduct,
};