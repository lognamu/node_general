const fs = require('fs');
const ejs = require('ejs');
const mysql = require('mysql');
const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/join', function(request, response) {
  fs.readFile('./views/member/join.ejs', 'utf-8', function(error, data) {
    response.send(ejs.render(data));
  });
});

router.post('/join', function(request, response) {
  var id = request.body.id;
  var pwd = request.body.pwd;
  var name = request.body.name;
  var gender = request.body.gender;
  var query = "insert into user values(?,?,?,?)";
  dbConn.query(query, [id, pwd, name, gender], function(error, data) {
    if (error) {
      console.log(error);
    }
    response.redirect('/');
  });
});

router.post('/login', function(request, response) {
  var id = request.body.id;
  var pwd = request.body.pwd;
  var query = 'select * from user where id = ? and pwd = ?'
  dbConn.query(query, [id, pwd], function(error, data) {
    if (error) {
      console.log(error);
    }
    if (data.length) {
      var id = data[0].id;
      var name = data[0].name;
      request.session.user = {
        id: id,
        name: name
      };
      response.redirect('/menu');
    } else {
      response.send('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  });
});

router.get('/logout', function(request, response){
  request.session.user = null;
  response.redirect('/');
});
