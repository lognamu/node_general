//npm install cookie-parser --save
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

//cookie-parser등록
app.use(cookieParser());

app.get('/', function(request, response){
  //쿠키생성
  response.cookie('auto-login', true, {maxAge:1000*10});
  response.cookie('login-info', {
    'userId':'admin',
    'savePassword':false,
    'saveId':true
  });
  response.type('text/html');
  response.send('<h1>메인페이지</h1>');
});

app.get('/cookies', function(request, response){
  //쿠키확인
  console.log(request.cookies);
  response.send(request.cookies);
});

app.listen(3000, function(){
  console.log('Server Start!');
});
