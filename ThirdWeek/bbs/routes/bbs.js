const express = require('express');
const bbsDao = require('../dao/bbsDao');
const router = express.Router();

module.exports = router;

router.get('/list', function(request, response, next){
  bbsDao.selectList(function(error, result){
    if(error){
      next(error);
    }else{
      response.render('bbs/list',
        {list:result, user:request.session.USER});
    }
  });
});

router.get('/insert', function(request, response){
  response.render('bbs/insert',{user:request.session.USER});
});

router.post('/insert', function(request, response, next){
  bbsDao.insert(request.body, function(error){
    if(error){
      next(error);
    }else{
      response.redirect('/bbs/list');
    }
  });
});

router.get('/view/:idx', function(request, response, next){
  bbsDao.selectOne(request.params.idx, function(error, result){
    if(error){
      next(error);
    }else{
      response.render('bbs/view',
          {user:request.session.USER, item:result[0]});
    }
  });
});
