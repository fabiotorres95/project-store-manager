const route = require('express').Router();
const { productsController } = require('../controllers');
const { checkName } = require('../middlewares');

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

module.exports = route;