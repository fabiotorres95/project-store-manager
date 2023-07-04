const route = require('express').Router();
const { salesController } = require('../controllers');
const { checkSale } = require('../middlewares');

route.get(
  '/',
  salesController.allSales,
);

route.get(
  '/:id',
  salesController.saleById,
);

route.post(
  '/',
  checkSale.productIdRequired,
  checkSale.quantityRequired,
  checkSale.quantitySize,
  checkSale.productIdExists,
  salesController.newSale,
);

module.exports = route;