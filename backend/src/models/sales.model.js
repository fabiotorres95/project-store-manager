const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [sales] = await connection.execute(
    `
      SELECT s.date, sp.product_id, sp.quantity, sp.sale_id 
      FROM sales 
      AS s 
      INNER JOIN sales_products 
      AS sp 
      ON s.id = sp.sale_id
    `,
  );

  return camelize(sales);
};

const findById = async (id) => {
  const [[sale]] = await connection.execute(
    'SELECT * FROM sales WHERE id = ?',
    [id],
  );

  return sale;
};

module.exports = {
  findAll,
  findById,
};