const { salesServices } = require('../services');

const allSales = async (_req, res) => {
  const { data } = await salesServices.getAllSales();

  return res.status(200).json(data);
};

const saleById = async (req, res) => {
  const { id } = req.params;
  const { data } = await salesServices.getById(Number(id));

  if (data.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  return res.status(200).json(data);
};

const newSale = async (req, res) => {
  const newData = req.body;
  const { data } = await salesServices.postNewSale(newData);

  return res.status(201).json(data);
};

module.exports = {
  allSales,
  saleById,
  newSale,
};