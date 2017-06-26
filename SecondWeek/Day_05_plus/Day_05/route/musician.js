var fs = require('fs');
var ejs = require('ejs');
//var mysql = require('mysql');
var express = require('express');
var router = express.Router();


//DB연결
/*
var client = mysql.createConnection({
  host:'localhost',
  port:3306,
  user:'root',
  password:'1111',
  database:'music'
});
*/

//var client = mysql.createConnection(dbConfig);


router.get('/', function(request, response){
  console.log('yes');
  fs.readFile('view/musician/list.ejs', 'utf-8', function(error, data){
    var query = "select * from musician";
    client.query(query, function(error, result){
      if(error){
         console.log(error);
      }
      else{
        response.send(ejs.render(data,{list:result}));
      }
    });
  });
});

router.get('/add', function(request, response){
  fs.readFile('view/musician/add.ejs', 'utf-8', function(error, data){
    response.type('text/html');
    response.send(ejs.render(data));
  });
});

router.post('/add',function(request, response){
  var name = request.body.name;
  var company = request.body.company;
  console.log(name, company);
  var query = 'insert into musician(name, company) values(?,?)';
  client.query(query, [name, company], function(error, data){
    console.log(data);
    response.redirect('/musician');
  });
});

router.get('/delete/:id', function(request, response){
  var id = request.params.id;
  var query = "delete from musician where id = ?";
  client.query(query, [id], function(){
    response.redirect('/musician');
  });
});

module.exports = router;
