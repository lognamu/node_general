
const mysql = require('mysql');
var dbConn = mysql.createConnection(
{
  "host":"192.168.0.88",
  "port":3306,
  "user":'root',
  "password":"1111",
  "database":"myapp"
});

module.exports = dbConn;
