const express = require("express");
const bodyParser = require("body-parser");
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


app.listen(port, () => console.log(`Now listening on port ${port}!`));
