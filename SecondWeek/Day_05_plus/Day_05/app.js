//db설정 -> 나중에 설명하자.
var dbConfig = require('./db/db_config');
var mysql = require('mysql');
global.client = mysql.createConnection(dbConfig);

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.listen(3000, function(){
  console.log('server start');
});

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(request, response){
  response.type('text/html');
  response.send('<h1>Root Page</h1>');
});

app.use('/musician', require('./route/musician'));
