const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiHttp);
const connection = require('../../../src/models/connection');
const app = require('../../../src/app');

describe('teste do path /products - CAMADA CONTROLLER', function () {
  it('GET /products/:id - Fazendo a requisição com o id errado', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await chai.request(app).get('/products/99');

    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal({ message: 'Product not found' });
  });

  it('POST /products - requisição sem a propriedade "name"', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await chai.request(app).post('/products').send({ errado: 'Luva do Thanos' });

    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal({ message: '"name" is required' });
  });

  it('POST /products - requisição com um "name" curto', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await chai.request(app).post('/products').send({ name: 'Luv' });

    expect(response.status).to.equal(422);
    expect(response.body).to.deep.equal({ message: '"name" length must be at least 5 characters long' });
  });

  afterEach(function () {
    sinon.restore();
  });
});