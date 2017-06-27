var express = require('express');
var userDao = require('../dao/userDao.js');
var router = express.Router();

module.exports = router;

router.get('/signup', function(request, response){
  response.render('user/signup');
});

router.post('/signup', function(request, response, next){
  userDao.signup(request.body, function(error, name){
    if(error){
      next(error);
    }else{
      response.render('user/hello',{name:name});
    }
  });
});
