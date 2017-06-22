//npm install express-session --save
var express = require('express');
var session = require('express-session');
var fs = require('fs');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
  secret: 'hellonodesecret',
  resave: false,
  saveUninitialized: true
}));

app.get('/',function(request, response){
  response.type('text/html');

  response.send('<h1>Root Page</h1>');
});

app.get('/login',function(request, response){
  console.log(request.session.USER);
  if(request.session.USER){
    console.log('이미 로그인 되어있습니다. 아이디:'+request.session.USER.userId);
    response.redirect('/');
    return;
  }

  fs.readFile('./html/login.html',function(error, data){
    response.type('text/html');
    response.send(data);
  });
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
