var fs = require('fs');
var musicianDao = require('../db/dao/musicianDao');
var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
  var query = "select * from musician";
  musicianDao.selectList(function(error, result){
    if(error){
      console.error(error);
    }else{
      response.render('musician/list',{list:result});
    }
  });
});

router.get('/add', function(request, response){
  response.render('musician/add');
});

router.post('/add',function(request, response){
  musicianDao.insert(request.body, function(error, result){
    if(error){
      console.error(error);
    }else{
      response.redirect('/musician');
    }
  });
});

router.get('/delete/:id', function(request, response){
  var id = request.params.id;
  var query = "delete from musician where id = ?";
  //보낼 파라미터가 하나면 배열로 보내지 않아도 된다.
  client.query(query, id, function(){
    response.redirect('/musician');
  });
});

module.exports = router;
