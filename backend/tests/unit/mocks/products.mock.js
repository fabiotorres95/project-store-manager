const martelo = 'Martelo de Thor';
const traje = 'Traje de encolhimento';
const luva = 'Luva do Thanos';

const allProductsFromDB = [
  {
    id: 1,
    name: martelo,
  },
  {
    id: 2,
    name: traje,
  },
];

const allProductsMocked = [
  {
    id: 1,
    name: martelo,
  },
  {
    id: 2,
    name: traje,
  },
];

const oneProductFromDB = {
  id: 1,
  name: martelo,
};

const oneProductMocked = {
  id: 1,
  name: martelo,
};

const newProductFromBody = {
  id: 4,
  name: luva,
};

const newProductMocked = {
  id: 4,
  name: luva,
};

const allNewProductsMocked = [
  {
    id: 1,
    name: martelo,
  },
  {
    id: 2,
    name: traje,
  },
  {
    id: 4,
    name: luva,
  },
];

module.exports = {
  allProductsFromDB,
  allProductsMocked,
  oneProductFromDB,
  oneProductMocked,
  newProductFromBody,
  newProductMocked,
  allNewProductsMocked,
};