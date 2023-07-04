const route = require('express').Router();
const { productsController } = require('../controllers');
const { checkName, checkSale } = require('../middlewares');

route.get(
  '/',
  productsController.allProducts, 
);

route.get(
  '/:id',
  productsController.productById,
);

route.post(
  '/',
  checkName.required,
  checkName.hasLength5,
  productsController.newProduct,
);

route.put(
  '/:id',
  checkName.required,
  checkName.hasLength5,
  checkSale.productIdExists,
  productsController.updateProduct,
);

module.exports = route;