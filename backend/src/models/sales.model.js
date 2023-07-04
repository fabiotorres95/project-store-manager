const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [sales] = await connection.execute(
    `
      SELECT s.date, sp.product_id, sp.quantity, sp.sale_id 
      FROM sales AS s 
      INNER JOIN sales_products AS sp 
      ON s.id = sp.sale_id
    `,
  );

  return camelize(sales);
};

const findById = async (id) => {
  const [sale] = await connection.execute(
    `
    SELECT s.date, sp.product_id, sp.quantity 
    FROM sales AS s
    INNER JOIN sales_products AS sp
    ON s.id = sp.sale_id
    WHERE id = ?
    `,
    [id],
  );

  return camelize(sale);
};

const insert = async (newData) => {
  const { id, itemsSold } = newData;
  await connection.execute(
    'INSERT INTO sales (date) VALUE (NOW())',
  );

  await Promise.all(itemsSold.map(async (obj) => {
    await connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [Number(id), Number(obj.productId), Number(obj.quantity)],
    );
  }));

  return newData;
};

module.exports = {
  findAll,
  findById,
  insert,
};