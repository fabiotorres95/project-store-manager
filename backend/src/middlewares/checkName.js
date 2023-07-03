const required = (req, res, next) => {
  const newData = req.body;
  if (!newData.name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  next();
};

const hasLength5 = (req, res, next) => {
  const newData = req.body;
  if (newData.name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  
  next();
};

module.exports = {
  required,
  hasLength5,
};