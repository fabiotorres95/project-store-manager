const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const mock = require('../mocks/products.mock');
const { productsModel } = require('../../../src/models');

describe('Testes do path /products - CAMADA MODEL', function () {
  it('GET /products - Lista todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([mock.allProductsFromDB]);

    const products = await productsModel.findAll();

    expect(products).to.be.an('array');
    expect(products).to.deep.equal(mock.allProductsMocked);
  });

  it('GET /products/:id - Lista o produto com o id dado', async function () {
    sinon.stub(connection, 'execute').resolves([[mock.oneProductFromDB]]);

    const product = await productsModel.findById(1);

    expect(product).to.be.an('object');
    expect(product).to.deep.equal(mock.oneProductMocked);
  });

  it('POST /products - Adiciona um produto novo', async function () {
    sinon.stub(connection, 'execute')
      .onFirstCall()
      .resolves([mock.allProductsFromDB])
      .onSecondCall()
      .resolves(mock.newProductFromBody)
      .onThirdCall()
      .resolves([mock.allNewProductsMocked]);

      const oldDB = await productsModel.findAll();

      expect(oldDB).to.be.an('array');
      expect(oldDB).to.have.lengthOf(2);

      const newData = await productsModel.insert(mock.newProductFromBody);

      expect(newData).to.be.an('object');
      expect(newData).to.deep.equal(mock.newProductMocked);

      const newDB = await productsModel.findAll();

      expect(newDB).to.be.an('array');
      expect(newDB).to.deep.equal(mock.allNewProductsMocked);
  });

  afterEach(function () {
    sinon.restore();
  });
});