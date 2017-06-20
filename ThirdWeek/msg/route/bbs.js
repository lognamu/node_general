const fs = require('fs');
const ejs = require('ejs');
const mysql = require('mysql');
const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/list', function(request, response){
  fs.readFile('./views/bbs/list.ejs','utf-8',function(error, data){
    var query = 'select * from bbs order by idx desc';
    dbConn.query(query, function(error, result){
      response.send(ejs.render(data,{'list':result}));
    });
  });
});

router.get('/view/:idx', function(request, response){
  fs.readFile('./views/bbs/view.ejs','utf-8', function(error, data){
    var idx = request.params.idx;
    var query = 'select * from bbs where idx = ?';
    dbConn.query(query, idx, function(error, result){
      response.send(ejs.render(data, {'bbs':result[0]}));
    });
  });
});

router.get('/insert', function(request, response){
  fs.readFile('./views/bbs/insert.ejs','utf-8', function(error, data){
    if(request.session.user.name){
      response.send(ejs.render(data, {'name':request.session.user.name}));
    }else{
      response.send(ejs.render(data, {'name':'Guest'}));
    }

  });
});

router.post('/insert', function(request, response){
  var title = request.body.title;
  var name = request.body.name;
  var content = request.body.content;
  var query = 'insert into bbs(title, name, content, regdate) values(?,?,?,curdate())';
  dbConn.query(query, [title, name, content], function(error, result){
    response.redirect('/bbs/list');
  });
});

router.get('/delete/:idx',function(request, response){
  var idx = request.params.idx;
  var query = 'delete from bbs where idx = ?';
  dbConn.query(query, idx, function(error, result){
    response.redirect('/bbs/list');
  });
});

router.get('/update/:idx',function(request, response){
  var idx = request.params.idx;
  fs.readFile('./views/bbs/update.ejs', 'utf-8', function(error, data){
    var query = 'select * from bbs where idx = ?';
    dbConn.query(query, idx, function(error, result){
      response.send(ejs.render(data, {bbs:result[0]}));
    });
  });
});

router.post('/update', function(request, response){
  var idx = request.body.idx;
  var title = request.body.title;
  var content = request.body.content;
  var query = 'update bbs set title = ?, content = ? where idx = ?';
  dbConn.query(query, [title, content, idx], function(error, result){
    response.redirect('/bbs/view/'+idx);
  });
});
