
const mysql = require('mysql');
var dbConn = mysql.createConnection(
{
  "host":"127.0.0.1",
  "port":3306,
  "user":'flynn',
  "password":"1111",
  "database":"node_general"
});

module.exports = dbConn;
