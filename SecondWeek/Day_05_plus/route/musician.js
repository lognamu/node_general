var fs = require('fs');
var musicianDao = require('../dao/musicianDao');
var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next){
  var query = "select * from musician";
  musicianDao.selectList(function(error, result){
    if(error){
      next(error);
    }else{
      response.render('musician/list',{list:result});
    }
  });
});

router.get('/add', function(request, response){
  response.render('musician/add');
});

router.post('/add',function(request, response, next){
  musicianDao.insert(request.body, function(error, result){
    if(error){
      next(error);
    }else{
      response.redirect('/musician');
    }
  });
});

router.get('/delete/:id', function(request, response, next){
  musicianDao.delete(request.params.id, function(error, result){
    if(error){
      next(error);
    }else{
      response.redirect('/musician');
    }
  });
});

module.exports = router;
