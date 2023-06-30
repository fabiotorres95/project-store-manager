const { salesModel } = require('../models');

const getAllSales = async () => {
  const data = await salesModel.findAll();

  return { status: 'SUCCESSFULL', data };
};

const getById = async (id) => {
  const data = await salesModel.findById(id);

  return { status: 'SUCCESSFULL', data };
};

module.exports = {
  getAllSales,
  getById,
};