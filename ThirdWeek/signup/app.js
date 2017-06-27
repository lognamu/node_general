global.dbPool = require('./db/db_pool');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, function(){
  console.log('server start');
});


app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/user', require('./routes/user'));


app.get('/', function(request, response){
  response.render('main.pug');
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
