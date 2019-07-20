require('dotenv').config();
const Item = require('./itemSchema');

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.DB_USER
}:${process.env.DB_PASS}@cluster0-cmnav.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true, dbName : 'seabay'});

const addItem = (id, name, price, category, images) => {
  return new Item({
    id,
    name, 
    price, 
    category,
    images,
    quantity,
    condition,
    description,
    watching
  }).save()
}

const addManyItems = (items) => {
  return Item.insertMany(items);
}

const getAll = () => {
  return Item.find({}).exec()
}

module.exports = {addItem, addManyItems, getAll}