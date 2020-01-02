const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  variation: String,
  date: Date,
  country: String,
  state: String,
  society: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Product", ProductSchema);