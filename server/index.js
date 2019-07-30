const express = require("express");
const bodyParser = require("body-parser");
const db = require('../database/index.js');
//require('dotenv').config()
const cors = require('cors')
const compression = require('compression')
var faker = require('faker');
const fs = require('fs');
const path = require('path')

const app = express();
const port = process.env.DB_PORT || 3005

app.use(compression())
app.use(cors())
//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

//app.use("/", express.static("dist"));
app.use(express.static(path.join(__dirname, '../dist')));
app.get("/api", (req, res) => {
  console.log("successful request!");
  res.send("Hi there");
});

//Get all items
app.get('/api/items', (req, res) => {
  //rewrite for less items
  // db.getAll()
  // .then( results => {res.send(results)})
  db.getItem(req.query.id)
  .then( results => {res.send(results[0][0])})
});


app.get('/testing', (req, res) => {
  // db.getItem(Math.floor(Math.random()*9999999))
  db.getItem(1)
  .then( results => {res.send(results[0][0])})
})


app.post('/testing', (req, res) => {
  res.status(200).send('Hello')
})
// //Seed items database
// app.post('/api/items/seed', (req, res) => {
//   //Images => Array
//   console.log(req.body.data)
//   items = req.body.data.map( item => {
//     item.images = [item.img1, item.img2, item.img3];
//     return item;
//   });

//   db.addManyItems(items)
//   .then ( () => {res.send('added all items to database')})
//   // res.send('seeding is currently disabled')
// });

let categories = ['books', 'movies', 'games', 'paintings', 'other']
let condition = ['new', 'used']
let itemID = 1;
let count = 1;

// console.time('timer');
// function runThousand() {
//   let newItems = [];
//   for (let i = 0; i < 100000; i++){
//     newItems.push(
//       { id: itemID, 
//         name: faker.commerce.product(), 
//         price: faker.commerce.price(1, 2000),
//         category: categories[(Math.floor(Math.random() * 5))],
//         images: [(Math.floor(Math.random() * 50)), (Math.floor(Math.random() * 50))],
//         quantity: parseInt(Math.random() * 50),
//         condition: condition[(Math.floor(Math.random() * 2))],
//         watching: parseInt(Math.random() * 500),
//         description: faker.lorem.words()
//       })
//       itemID++;
//     }
//     db.addManyItems(newItems)
//     .then(() => {
//       if (count === 100){
//         console.log('COMPLETE')
//         console.timeEnd('timer')
//         return;
//       } else {
//         runThousand()
//         count++
//         console.log(count);
//       }
//     })
//   }
// runThousand();
// function resolveAfter10Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       runThousand()
//       resolve()}, 10000);
//   });
// }
// let categories = ['books', 'movies', 'games', 'paintings', 'other']
// let condition = ['new', 'used']
// let itemID = 1;
// let count = 1;
// console.time('timer');
// const seedFile = () => {
//   let string = 'id,name,price,category,images,quantity,condition,watching,description\n'
//   for (let i = 8000001; i <= 9000000; i++){
//     string += `${i},${faker.commerce.product()},${faker.commerce.price(1, 2000)},${categories[(Math.floor(Math.random() * 5))]},${(Math.floor(Math.random() * 50))} ${(Math.floor(Math.random() * 50))},${parseInt(Math.random() * 50)},${condition[(Math.floor(Math.random() * 2))]},${parseInt(Math.random() * 500)},${faker.lorem.words()}\n` 
//     }
//   fs.appendFile('./seedMongo.csv', string, (err) => {
//     if (err) {console.log(err)}
//     else {console.timeEnd('timer')}
//   })
// }

// seedFile();

// async function runTests() {
//   for (let j = 0; j < 100; j++){ 
//     await resolveAfter10Seconds();
//     console.log('done', j);
//   }
// }
// runTests()

app.listen(port, () => console.log(`Now listening on port ${port}!`));
