const productIdRequired = (_req, _res, next) => {
  next();
};

const quantityRequired = (_req, _res, next) => {
  next();
};

const quantitySize = (_req, _res, next) => {
  next();
};

const productIdExists = (_req, _res, next) => {
  next();
};

module.exports = {
  productIdRequired,
  quantityRequired,
  quantitySize,
  productIdExists,
};
