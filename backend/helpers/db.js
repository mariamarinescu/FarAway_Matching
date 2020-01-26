const mysql      = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.DB_PASS,
  database : process.env.DB
});
module.exports  =  connection;