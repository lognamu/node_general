//여태까지는 js파일 하나로 모든 요청을 처리
//즉 모든 url이 하나의 파일 안에 들어있기 때문에 파일의 복잡도가 증가
//요청의 종류(로그인, 회원가입, 게시판 등)에 따라 페이지를 분리하므로써
//가독성과 유지보수성도 높이며 협업까지 고려해보자

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//정적라우팅
//정적자원들을 제일먼저 로드할 수 있도록 상단에 등록
//보통 js(자바스크립트 라이브러리(jquery, ajax등)또는 css등을 제공할때 사용
app.use('/static',express.static(__dirname+'/public'));

//var login = require('./route/login');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(request, response){
  response.type('text/html');
  response.send('<h1>Root Page</h1>');
});

app.use('/user', require('./route/user'));

app.use('/login', require('./route/login'));


app.listen(3000, function(){
  console.log('Server start!');
});
