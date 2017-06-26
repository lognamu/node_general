var fs = require('fs');
var mysql = require('mysql');
var express = require('express');
var router = express.Router();


//DB연결
var conn = mysql.createConnection({
  host:'localhost',
  port:3306,
  user:'root',
  password:'1111',
  database:'node_general'
});
var pool = mysql.createPool(
  {
    host:'localhost',
    port:3306,
    user:'root',
    password:'1111',
    database:'node_general'
  }
);

router.get('/', function(request, response){
  var query = "select * from musician";
  conn.query(query, function(error, result){
    if(error){
       console.log(error);
    }
    else{
      response.render('musician/list.pug', {list:result});
    }
  });
});

router.get('/add', function(request, response){
  response.render('musician/add.pug');
});

router.post('/add',function(request, response){
  var name = request.body.name;
  var company = request.body.company;
  var query = 'insert into musician(name, company) values(?,?)';
  conn.query(query, [name, company], function(error, data){
    console.log(data);
    response.redirect('/musician');
  });
});

router.get('/delete/:id', function(request, response){
  var id = request.params.id;
  var query = "delete from musician where id = ?";
  conn.query(query, [id], function(){
    response.redirect('/musician');
  });
});

module.exports = router;
