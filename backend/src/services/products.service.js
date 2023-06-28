const { productsModel } = require('../models');

const getAllProducts = async () => {
  const data = await productsModel.findAll();

  return { status: 'SUCCESSFULL', data };
};

const getProductById = async (id) => {
  const data = await productsModel.findById(id);

  return { status: 'SUCCESSFULL', data };
};

module.exports = {
  getAllProducts,
  getProductById,
};