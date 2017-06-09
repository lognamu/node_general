var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
//서버생성
var app = express();
app.get('/', function(request, response){
  var name = request.query.name;
  console.log("name:",name);
  response.type('text/html');
  response.send('<h1>메인페이지</h1>'+name+'님 환영합니다.');
});

app.get('/login', function(request, response){
  response.type('text/html');
  fs.readFile('./html/login.html','utf-8',function(error, data){
    response.send(data);
  });
});

app.get('/user/:id',function(request, response){
  var id = request.params.id;
  console.log(id);
  var users = [{name:'flynn', job:'teacher'}, {name:'김희수',job:'developer'}]
  response.type('text/html');
  response.send('<h1>이름:'+users[id].name+' 직업:'+users[id].job+'</h1');
});

app.use(bodyParser.urlencoded({extended:false}));

app.post('/login',function(request, response){
  console.log(request.body);
  var id = request.body.id;
  var password = request.body.password;
  response.send('<h1>아이디:'+request.body.id+'</h1>'+
                '<h2>비밀번호:'+request.body.password+'<h2>');

});

app.listen(3000, function(){
  console.log("Server running at http://localhost:3000");
});
