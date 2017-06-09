const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const fs = require('fs');
const mysql = require('mysql');
const app = express();

app.listen(3000, function(){
  console.log('server start');
});

var client = mysql.createConnection({
  'host':'localhost',
  'port':3306,
  'user':'root',
  'password':'1111',
  'database':'myapp'
});

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(request, response){
  fs.readFile('./view/main.ejs', 'utf-8', function(error, data){
    response.send(ejs.render(data));
  });
});

app.get('/member/join', function(request, response){
  fs.readFile('./view/join.ejs', 'utf-8', function(error, data){
    response.send(ejs.render(data));
  });
});

app.post('/member/join',function(request, response){
  var id = request.body.id;
  var pwd = request.body.pwd;
  var name = request.body.name;
  var gender = request.body.gender;
  var query = "insert into member values(?,?,?,?)";
  client.query(query, [id, pwd, name, gender], function(error, data){
    if(error){
      console.log(error);
    }
    response.redirect('/');
  });
});

app.post('/member/login', function(request, response){
  var id = request.body.id;
  var pwd = request.body.pwd;
  var query = 'select * from member where id = ? and pwd = ?'
  client.query(query, [id, pwd], function(error, data){
    if(error){
      console.log(error);
    }
    if(data.length){
      var id = data[0].name;
      fs.readFile('./view/hello.ejs', 'utf-8', function(error, data){
        response.send(ejs.render(data, {name:name}));
      });
    }else{
      response.send('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  });
});
