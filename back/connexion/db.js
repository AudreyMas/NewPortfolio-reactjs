const mysql = require('mysql');
const dotenv = require('dotenv').config();
const connection = mysql.createConnection({
  // host: `localhost`,
  // // port     : `3306`,
  // user: `root`, //completer avec vos infos
  // password: `${process.env.DB_PASS}`, //completer avec vos infos
  // database: `db_portfolio` //completer avec vos infos
  host: `fojvtycq53b2f2kx.chr7pe7iynqr.eu-west-1.rds.amazonaws.com`,
  port: `3306`,
  user: `rywhflhy5g0v33g5`, //completer avec vos infos
  password: `${process.env.DB_PASS}`, //completer avec vos infos
  database: `yevmyu2nhul0p3pk` //completer avec vos infos
});

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the MySQL server');
  }
});


console.log(connection);

module.exports = connection;