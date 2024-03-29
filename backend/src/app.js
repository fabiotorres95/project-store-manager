const express = require('express');
const routes = require('./routes');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use(express.json());
app.use('/products', routes.productsRoutes);
app.use('/sales', routes.salesRoutes);

module.exports = app;
