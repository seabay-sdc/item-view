require('dotenv').config();
var faker = require('faker');

// const mongoose = require('mongoose');
// // mongoose.connect('mongodb://admin:mongoseabay@18.217.126.7:27017/seabay');
// // mongoose.connect('mongodb://18.217.126.7:27017/seabay', {
// //   user: 'admin',
// //   pass: 'mongoseabay',
// //   useNewUrlParser: true
// // });
// // mongoose.connect('mongodb://localhost/test');

// const Item = require('./itemSchema');

// mongoose.connect(`mongodb+srv://${process.env.DB_USER
// }:${process.env.DB_PASS}@cluster0-cmnav.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true, dbName : 'seabay'});

// const addItem = (id, name, price, category, images, quantity, condition, description, watching) => {
//   return new Item({
//     id,
//     name, 
//     price, 
//     category,
//     images,
//     quantity,
//     condition,
//     description,
//     watching
//   }).save()
// }

const pg = require('pg');
const Sequelize = require('sequelize');
const dbPG = new Sequelize('postgres://postgres:docker@ec2-18-221-95-6.us-east-2.compute.amazonaws.com:5432/seabay2')

class data extends Sequelize.Model {}


// const addManyPostgres = (array) => {
//   let categories = ['books', 'movies', 'games', 'paintings', 'other']
//   let conditions = ['new', 'used']
//   let itemID = 1;
//   let count = 1;
//   console.time('timer');
//   async function runMillion() {
//     let string = ''
//     for (let i = 0; i < 1000; i++){
//       name = faker.commerce.product()
//       price = faker.commerce.price(1, 2000)
//       category = categories[(Math.floor(Math.random() * 5))]
//       images = [(Math.floor(Math.random() * 50)), (Math.floor(Math.random() * 50))]
//       quantity = parseInt(Math.random() * 50)
//       condition = conditions[(Math.floor(Math.random() * 2))]
//       watching = parseInt(Math.random() * 500)
//       description = faker.lorem.words();
//       string += `('${name}', '${price}','${category}','${images}','${quantity}','${condition}','${watching}','${description}'),`
//     }
//     string = string.substring(0, string.length - 1)
//     await dbPG.query(`insert into data (name, price, category, images, quantity, condition, watching, description) values ${string};`)
//     }
//     async function runThousdand() {
//       for (let i = 0; i < 9000; i++){
//         await runMillion();
//       }
//     }
//     runThousdand();
//     console.timeEnd('timer');
// }

// addManyPostgres()

const addManyItems = (items) => {
  return Item.collection.insertMany(items);
}

const getItem = (id) => {
  return dbPG.query(`select * from data where id = ${id};`)
}

const getAll = (item) => {
  //return Item.find({}).exec()
  return Item.findOne({id: item})
}

const getCategory = (cat) => {
  return Item.find({category: cat}).count()
  // return 55
}

module.exports = {addManyItems, getAll, getCategory, getItem}