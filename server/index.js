const express = require("express");
const bodyParser = require("body-parser");
const db = require('../database/index.js');
require('dotenv').config()


const app = express();
const port = process.env.DB_PORT

//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("dist"));

app.get("/api", (req, res) => {
  console.log("successful request!");
  res.send("Hi there");
});

//Get all items
app.get('/api/items', (req, res) => {
  db.getAll()
  .then( results => {res.send(results)})
});

//Seed items database
app.post('/api/items/seed', (req, res) => {
  // //Images => Array
  // items = req.body.data.map( item => {
  //   item.images = [item.img1, item.img2, item.img3];
  //   return item;
  // });

  // db.addManyItems(items)
  // .then ( () => {res.send('added all items to database')})
  res.send('seeding is currently disabled')
});


app.listen(port, () => console.log(`Now listening on port ${port}!`));
