const { productsModel } = require('../models');

const getAllProducts = async () => {
  const data = await productsModel.findAll();

  return { status: 'SUCCESSFULL', data };
};

module.exports = {
  getAllProducts,
};