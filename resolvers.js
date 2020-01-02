const Product = require('./Product');

module.exports = {
  Query: {
    products: () => Product.find().sort('-createdAt'),
    product: (_, { name }) => Product.find({'name': name}, {}),
    productsByState: (_, { state }) => Product.find({'state': state}, {}),
    productsByVariation: (_, { variation }) => Product.find({ 'variation': variation }, {}),
    productsBySociety: (_, { society }) => Product.find({ 'society': society }, {}),
  },

  Mutation: {
    createProduct: (_, { name, price, variation, state, society, country, date, createdAt }) => country === 'Brasil' ? Product.create({ name, price, variation, date, createdAt, state, society, country }) : Product.create({ name, price, variation, date, createdAt, country }),
  }
}