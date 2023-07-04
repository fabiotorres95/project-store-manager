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
  const data = await productsModel.insert(newDataWithId);

  return { status: 'CREATED', data };
};

const putProduct = async (id, newData) => {
  const { name } = newData;
  const newDataWithId = { id, name };
  console.log(newDataWithId);
  const data = await productsModel.update(newDataWithId);

  return { status: 'SUCCESSFULL', data };
};

module.exports = {
  getAllProducts,
  getProductById,
  postNewProduct,
  putProduct,
};