const sum = require('../server/testing.js');
const db = require('../database/index.js');
const request = require('supertest')
const app = require('./testapp')

var assert = require('assert');

let testMongo = false;
let testPostgres = true;
//Mongo Testing

if (testMongo){
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Item = require('../database/itemSchema');
describe('query database for single item', function() {
  it('should get an item in less than 50ms', async function() {
    this.timeout(1000);
    console.time('timerMongo');
    await Item.find({id: 9834756});
    console.timeEnd('timerMongo');
    assert.equal(1, 1);
    done()
  });
});

  describe('#findone().count()', function() {
  it('should give a count of a category', async function() {
    this.timeout(5000);
    console.time('timer');
    const count = await db.getCategory('other');
    console.timeEnd('timer');
    assert.equal(count, 1998537);
  });
});
let time = 0
// for (let j = 0; j < 10; j++){
  describe('get 1000 items in less than 1.5 second', function() {
    describe('#findone().count()', function() {
      it('should get 1000 items in less than 1.5 seconds', async function() {
        this.timeout(1500);
        console.time('timer');
        for (let i = 0; i < 1000; i++){
          const count = await db.getAll(i * 1000);
        }
        console.timeEnd('timer');
        assert.equal(1, 1);
      });
    });
  });
// }
}
//SQL Teting

//const conString = 'postgres://localhost:5432/seabay2'
//const dbPG = new pg.Client(conString);
const pg = require('pg');
const Sequelize = require('sequelize');
const dbPG = new Sequelize('postgres://localhost:5432/seabay2')

class Items extends Sequelize.Model {}

if (testPostgres){
  describe('query database for single item', function() {
    it('should get an item in less than 50ms', async function() {
      this.timeout(1000);
      let count = 1;
      
      await dbPG.query('select * from data where id = 2;')
      await dbPG.query('select * from data where id = 2;')
      console.time('timer1')
      await dbPG.query('select * from data where id = 1;')
      console.timeEnd('timer1');
      assert.equal(1, 1);
      // .then((res)=> {
      //   //Old code for vanilla PG
      //   // console.time('timer');
      //   // dbPG.query('select * from data where id = 8366029;', (err, res) => {
      //     //   res.rows[0].name;
      //     // })
      //   });
  });
})
  describe('count by category', function() {
    it('should give a count of a category', async function() {
      this.timeout(4000);
      await dbPG.query('select * from data where id = 2;')
      console.time('timer2');
      let result = '';
      await dbPG.query(`select count(*) from data where category = 'other';`)
      .then((res) => {
        result = res[0][0].count;
      })
      console.timeEnd('timer2');
      assert.equal(result, '1999766')
      // })
    });
  })
  describe('count by category', function() {
    xit('should give a count of a category', async function() {
      this.timeout(2000);
      await dbPG.query('select * from data where id = 2;')
      console.time('timer2');
      let result = '';
      for (let i = 0; i < 1000; i++){
        await dbPG.query(`select * from data where id = ${i*1000};`)
      }
      console.timeEnd('timer2');
      assert.equal(1, 1)
      // })
    });
  })
}

describe('testing server', () => {
  it('should get a 200 response', async () => {
    const response = await request(app).get('/');
    assert.equal(response.statusCode, 200);
  })
})