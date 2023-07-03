const { salesModel } = require('../models');

let nextId = 3;

const getAllSales = async () => {
  const data = await salesModel.findAll();

  return { status: 'SUCCESSFULL', data };
};

const getById = async (id) => {
  const data = await salesModel.findById(id);

  return { status: 'SUCCESSFULL', data };
};

const postNewSale = async (newData) => {
  const newDataWithId = { id: nextId, itemsSold: newData };
  nextId += 1;

  const data = await salesModel.insert(newDataWithId);

  return { status: 'CREATED', data };
};

module.exports = {
  getAllSales,
  getById,
  postNewSale,
};