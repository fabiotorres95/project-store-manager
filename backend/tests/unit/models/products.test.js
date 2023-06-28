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

  afterEach(function () {
    sinon.restore();
  });
});