var express = require('express');
var userDao = require('../dao/userDao.js');
var router = express.Router();

module.exports = router;

router.get('/signup', function(request, response){
  response.render('user/signup');
});

router.get('/signin/id', function(request, response, next){

});

router.post('/checkPwd', function(request, response, next){
  userDao.checkPwd(request.body, function(error, user){
    if(error){
      next(error);
    }else{
      if(user.pwd == request.body.pwd){
        request.session.USER = user;
        response.send('y');
      }else{
        response.send('n');
      }
    }
  });
});

router.get('/logout', function(request, response){
  request.session.USER = null;
  //request.session.destroy();
  response.redirect('/');
});
