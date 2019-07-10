const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'ID is required, dude.']
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  images: {
    type: Array,
    required: [true, 'At least one image is required']
  }
})

module.exports = mongoose.model('Item', itemSchema);