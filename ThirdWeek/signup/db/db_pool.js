var mysql = require('mysql');
var dbConfig = require('./db_config');
var pool = mysql.createPool(dbConfig);
module.exports = pool;
