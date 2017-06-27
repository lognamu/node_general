const fs = require('fs');
const ejs = require('ejs');
const mysql = require('mysql');
const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/list',function(request, response){
  fs.readFile('./views/visitbook/list.ejs','utf-8',function(error, data){
    var query = 'select * from visitbook order by idx desc';
    dbConn.query(query, function(error, result){
      response.send(ejs.render(data, {'list':result}));
    });
  });
});

router.get('/insert', function(request, response){
  if(!request.session.user){
    response.send('로그인 하신 뒤 이용하실 수 있습니다.<br>'+
                  '<a href="/">로그인하기</a>');
  }else{
    fs.readFile('./views/visitbook/insert.ejs', 'utf-8', function(error, data){
      response.send(ejs.render(data, {name:request.session.user.name}));
    });
  }

});

router.post('/insert', function(request, response){
  var name = request.body.name;
  var content = request.body.content;
  var pwd = request.body.pwd;
  var query = 'insert into visitbook(name, content, ip, pwd, regdate) '
              +'values(?,?,?,?,curdate())';
  dbConn.query(query, [name, content, request.ip
                      ,pwd], function(error, data){
    if(error){
      console.log(error);
    }
    response.redirect('/visitbook/list');
  });
});

router.get('/delete', function(request, response){
  var idx = request.query.idx;
  var query = 'delete from visitbook where idx = ?';
  dbConn.query(query, idx, function(error, data){
    response.redirect('/visitbook/list');
  });
});

router.get('/update', function(request, response){
  var idx = request.query.idx;
  fs.readFile('./views/visitbook/update.ejs','utf-8', function(error, data){
    var query = 'select * from visitbook where idx = ?';
    dbConn.query(query, idx, function(error, result){
      response.send(ejs.render(data, {visit:result[0]}));

    });
  });
});

router.post('/update', function(request, response){
  var idx = request.body.idx;
  var content = request.body.content;
  var pwd = request.body.pwd;
  var query = 'update visitbook set content=?, pwd=? where idx = ?'
  dbConn.query(query, [content, pwd, idx], function(error, result){
    response.redirect('/visitbook/list');
  });
});
