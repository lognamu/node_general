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
    connectionLimit:1,
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
  pool.getConnection(function(error, conn){
    //파라미터가 하나면 배열로 넣을 필요 없다.
    conn.query(query, id, function(error, result){
      console.log('result', result);
      //conn을 pool에게 돌려준다.
      conn.release();
      response.redirect('/musician');
    });
  });
});


router.get('/update/:id', function(request, response){
  var id = request.params.id;
  var query = "select * from musician where id = ?"
  pool.getConnection(function(error, conn){
    conn.query(query, id, function(error, result){
      conn.release();
      response.render('musician/update.pug', {item:result[0]});
    });
  });
});

router.post('/update', function(request, response){
  var paramArr = [request.body.name, request.body.company, request.body.id];
  console.log(paramArr);
  pool.getConnection(function(error, conn){
    var query = "update musician set name=?, company=? where id=?";
    conn.query(query, paramArr, function(error, result){
      conn.release();
      response.redirect('/musician');
    });
  });
});

module.exports = router;
