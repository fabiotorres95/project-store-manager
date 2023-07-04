const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );

  return products;
};

const findById = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );

  return product;
};

const insert = async (newData) => {
  await connection.execute(
    'INSERT INTO products (name) VALUE (?)',
    [newData],
  );

  return newData;
};

const update = async (newData) => {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [newData.name, newData.id],
  );

  return newData;
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
};