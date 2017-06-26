//npm install express-session --save
var express = require('express');
var session = require('express-session');
var fs = require('fs');
var bodyParser = require('body-parser');


var app = express();
app.set('views', './myViews');
//app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
  key:'sid', //세션키
  secret: 'hellonodesecret', //session을 암호화 할때 사용하는 키
  resave: false, //세션에 변동이 없어도 계속 저장할지 설정 default: true
  saveUninitialized: true, //초기화되지 않은 세션정보도 저장할지 설정  default: true
  cookie: {
    maxAge: 1000 * 10// 쿠키 유효기간 1시간
  }
}));

app.get('/',function(request, response){
  response.type('text/html');
  if(request.session.USER == null){
      response.send('<h1>Root Page</h1>');
  }else{
      response.send('<h1>Root Page</h1><a href="/bbs/list">게시판</a>');
  }
});

app.get('/bbs/list', function(request, response){
  response.render("bbs/list.pug", {user:request.session.USER});

});

app.get('/login',function(request, response){
  console.log(request.session.USER);
  if(request.session.USER){
    console.log('이미 로그인 되어있습니다. 아이디:'+request.session.USER.userId);
    response.redirect('/');
    return;
  }
  response.render("login/form.pug");
});

app.post('/login',function(request, response){
  var id = request.body.id;
  var password = request.body.password;

  var user = {
    userId : id,
    userPassowrd : password
  }

  request.session.USER = user;
  response.redirect('/');
});

//이건 실습으로 시키자
app.get('/logout', function(request, response){
  //세션내용 전체삭제
  //request.session.destroy();
  request.session.USER = null;
  response.redirect('/');
});

app.listen(3000, function(){
  console.log('Server running at http://localhost:3000');
});
