const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiHttp);
const connection = require('../../../src/models/connection');
const app = require('../../../src/app');

describe('teste do path /sales - CAMADA CONTROLLER', function () {
  it('GET /sales/:id - Fazendo a requisição com o id errado', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await chai.request(app).get('/sales/99');

    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal({ message: 'Sale not found' });
  });

  it('POST /sales - requisição sem a propriedade "productId"', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await chai.request(app).post('/sales').send([{ 
      errado: 10,
      quantity: 5,
    }]);

    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal({ message: '"productId" is required' });
  });

  it('POST /sales - requisição sem a propriedade "quantity"', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await chai.request(app).post('/sales').send([{
      productId: 2,
      errado: 20, 
    }]);

    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal({ message: '"quantity" is required' });
  });

  it('POST /sales - requisição com uma quantidade menor que 1', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await chai.request(app).post('/sales').send([{
      productId: 2,
      quantity: 0, 
    }]);

    expect(response.status).to.equal(422);
    expect(response.body).to.deep.equal({ message: '"quantity" must be greater than or equal to 1' });
  });

  it('POST /sales - requisição com um productId inexistente', async function () {
    sinon.stub(connection, 'execute').resolves([[
      {
        id: 1,
        name: 'Martelo de Thor',
      },
      {
        id: 2,
        name: 'Traje de encolhimento',
      },
    ]]);

    const response = await chai.request(app).post('/sales').send([{
      productId: 3,
      quantity: 5, 
    }]);

    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal({ message: 'Product not found' });
  });

  afterEach(function () {
    sinon.restore();
  });
});