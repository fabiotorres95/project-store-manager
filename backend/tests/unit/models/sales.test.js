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
  
  it('POST /sales - adiciona uma nova venda', async function () {
    sinon.stub(connection, 'execute').resolves([mock.allSalesFromDB]);

    const oldDB = await salesModel.findAll();
    expect(oldDB).to.have.lengthOf(3);

    sinon.restore();
    sinon.stub(connection, 'execute').resolves(mock.newSaleMocked);

    const newSale = await salesModel.insert(mock.newSaleFromBody);
    expect(mock.newSaleFromBody).to.deep.equal(newSale);

    sinon.restore();
    sinon.stub(connection, 'execute').resolves([mock.allNewSalesFromDB]);

    const newDB = await salesModel.findAll();
    expect(newDB).to.have.lengthOf(5);
    expect(newDB[newDB.length - 1].productId)
      .to.deep.equal(newSale.itemsSold[newSale.itemsSold.length - 1].productId);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});