const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const mock = require('../mocks/sales.mock');
const { salesModel } = require('../../../src/models');

describe('Testes do path /sales - CAMADA MODEL', function () {
  it('GET /sales - Lista todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([mock.allSalesFromDB]);

    const sales = await salesModel.findAll();

    expect(sales).to.be.an('array');
    expect(sales).to.deep.equal(mock.allSalesMocked);
  });

  it('GET /sales/:id - Lista as vendas com o mesmo id', async function () {
    sinon.stub(connection, 'execute').resolves([mock.oneSaleFromDB]);

    const sale = await salesModel.findById(1);

    expect(sale).to.be.an('array');
    expect(sale).to.deep.equal(mock.oneSaleMocked);
  });

  afterEach(function () {
    sinon.restore();
  });
});