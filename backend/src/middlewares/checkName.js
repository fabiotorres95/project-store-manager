const required = (_req, _res, next) => {
  next();
};

const hasLength5 = (_req, _res, next) => {
  next();
};

module.exports = {
  required,
  hasLength5,
};