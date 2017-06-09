//express는 http모듈의 확장판이라고 볼수 있는 모듈로
//http모듈이 갖는 한계를 뛰어넘게 도와줍니다.
//express는 외부모듈이므로 설치해야 합니다. npm install express
var express = require('express');

//서버생성
var app = express();
app.get('/', function(request, response){
  //response.type('text/html');
  //throw 'err';
  //response.send('<h1>메인페이지</h1>');
  response.send('<h1>메인페이지</h1>');
});

app.get('/login', function(request,response){
  response.type('text/html');
  //response.end() --> 텍스트(html)
  //response.send() --> 내용을 분석해서 텍스트 또는 JSON
  response.send('<input placeholder="id"><br><input placeholder="password">');
//  response.send('{"name":"flynn"}');
});

//에러처리 404 - 존재하지 않는 요청
app.use(function(request, response){
  response.type('text/html');
  //response.sendStatus(404);
  response.send(404, '존재하지 않는 페이지입니다.');
});

//에러처리 500 - 서버측 오류
app.use(function(err, request, response, next){
  response.type('text/html');

  response.send(500, '서버오류입니다. 빠른시일내에 복구하도록 노력하겠습니다.');
  next('오류발생');
});

app.listen(3000, function(){
  console.log("Server running at http://localhost:3000");
});
