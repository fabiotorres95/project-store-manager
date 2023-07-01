const allSalesFromDB = [
  {
    saleId: 1,
    date: '2021-09-09T04:54:29.000Z',
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    date: '2021-09-09T04:54:54.000Z',
    productId: 2,
    quantity: 2,
  },
  {
    saleId: 2,
    date: '2022-10-09T04:54:54.000Z',
    productId: 1,
    quantity: 3,
  },
];

const allSalesMocked = [
  {
    saleId: 1,
    date: '2021-09-09T04:54:29.000Z',
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    date: '2021-09-09T04:54:54.000Z',
    productId: 2,
    quantity: 2,
  },
  {
    saleId: 2,
    date: '2022-10-09T04:54:54.000Z',
    productId: 1,
    quantity: 3,
  },
];

const oneSaleFromDB = [
  {
    date: '2021-09-09T04:54:29.000Z',
    productId: 1,
    quantity: 2,
  },
  {
    date: '2021-09-09T04:54:54.000Z',
    productId: 2,
    quantity: 2,
  },
];

const oneSaleMocked = [
  {
    date: '2021-09-09T04:54:29.000Z',
    productId: 1,
    quantity: 2,
  },
  {
    date: '2021-09-09T04:54:54.000Z',
    productId: 2,
    quantity: 2,
  },
];

module.exports = {
  allSalesFromDB,
  allSalesMocked,
  oneSaleFromDB,
  oneSaleMocked,
};