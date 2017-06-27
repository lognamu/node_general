global.dbPool = require('./db/db_pool');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.listen(3000, function(){
  console.log('server start');
});

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static(__dirname+"/resource"));
app.use(session({
  key:'sid', //세션키
  secret: 'hellonodesecret', //session을 암호화 할때 사용하는 키
  resave: false, //세션에 변동이 없어도 계속 저장할지 설정 default: true
  saveUninitialized: true, //초기화되지 않은 세션정보도 저장할지 설정  default: true
  cookie: {
    maxAge: 1000*60*30// 쿠키 유효기간 1시간
  }
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/user', require('./routes/user'));


app.get('/', function(request, response){
  response.render('main.pug');
});

app.get('/menu', function(request, response){
    response.render('menu.pug', {user:request.session.USER});
});
