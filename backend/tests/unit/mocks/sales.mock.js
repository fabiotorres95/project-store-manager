const data2021 = '2021-09-09T04:54:29.000Z';

const allSalesFromDB = [
  {
    saleId: 1,
    date: data2021,
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    date: data2021,
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
    date: data2021,
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    date: data2021,
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
    date: data2021,
    productId: 1,
    quantity: 2,
  },
  {
    date: data2021,
    productId: 2,
    quantity: 2,
  },
];

const oneSaleMocked = [
  {
    date: data2021,
    productId: 1,
    quantity: 2,
  },
  {
    date: data2021,
    productId: 2,
    quantity: 2,
  },
];

const newSaleFromBody = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

const newSaleMocked = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

const allNewSalesFromDB = [
  {
    saleId: 1,
    date: data2021,
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    date: data2021,
    productId: 2,
    quantity: 2,
  },
  {
    saleId: 2,
    date: '2022-10-09T04:54:54.000Z',
    productId: 1,
    quantity: 3,
  },
  {
    saleId: 3,
    date: '2023-11-09T04:54:54.000Z',
    productId: 1,
    quantity: 1,
  },
  {
    saleId: 3,
    date: '2023-11-09T04:54:54.000Z',
    productId: 2,
    quantity: 5,
  },
];

module.exports = {
  allSalesFromDB,
  allSalesMocked,
  oneSaleFromDB,
  oneSaleMocked,
  newSaleFromBody,
  newSaleMocked,
  allNewSalesFromDB,
};