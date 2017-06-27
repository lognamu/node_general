
const mysql = require('mysql');
var dbConn = mysql.createConnection(
{
  "host":"localhost",
  "port":3306,
  "user":'root',
  "password":"1111",
  "database":"myapp"
});

module.exports = dbConn;
