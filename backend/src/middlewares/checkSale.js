const { productsModel } = require('../models');

const productIdRequired = (req, res, next) => {
  const data = req.body;

  const result = data.find((obj) => !obj.productId);
  if (result) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  next();
};

const quantityRequired = (req, res, next) => {
  const data = req.body;

  const result = data.find((obj) => obj.quantity === undefined);
  if (result) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  next();
};

const quantitySize = (req, res, next) => {
  const data = req.body;

  const result = data.find((obj) => obj.quantity === 0 || obj.quantity < 1);
  if (result) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

const productIdExists = async (req, res, next) => {
  const data = req.body;
  const products = await productsModel.findAll();

  const ids = products.map((obj) => obj.id);

  const result = data.find((obj) => !ids.includes(obj.id));
  if (result) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = {
  productIdRequired,
  quantityRequired,
  quantitySize,
  productIdExists,
};
