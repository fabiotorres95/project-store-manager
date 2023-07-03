const { productsModel } = require('../models');

let nextId = 4;

const getAllProducts = async () => {
  const data = await productsModel.findAll();

  return { status: 'SUCCESSFULL', data };
};

const getProductById = async (id) => {
  const data = await productsModel.findById(id);

  return { status: 'SUCCESSFULL', data };
};

const postNewProduct = async (newData) => {
  const newDataWithId = { id: nextId, ...newData };
  nextId += 1;
  await productsModel.addNewProduct(newDataWithId);

  return { status: 'CREATED', newDataWithId };
};

module.exports = {
  getAllProducts,
  getProductById,
  postNewProduct,
};