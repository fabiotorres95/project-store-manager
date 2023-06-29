const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiHttp);
const connection = require('../../../src/models/connection');
const app = require('../../../src/app');

describe('teste de products/:id - CAMADA CONTROLLER', function () {
  it('fazendo a requisição com o id errado', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await chai.request(app).get('/products/99');

    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal({ message: 'Product not found' });
  });

  afterEach(function () {
    sinon.restore();
  });
});