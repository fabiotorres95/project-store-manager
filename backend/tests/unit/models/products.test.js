const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const mock = require('../mocks/products.mock');

describe('Testes do path /products - CAMADA MODEL', function () {
  it('GET /products - Lista todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves(mock.allProductsFromDB);
  });

  it('GET /products/:id - Lista o produto com o id dado', async function () {
    
  });

  afterEach(function () {
    sinon.restore();
  });
});