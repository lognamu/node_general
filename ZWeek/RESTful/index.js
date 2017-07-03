//REpresentation State Transfer + ful(형용사)
//REST라는것은 웹 본연의 특징에 맞게 웹의 구조와 동작의 방법을 기술한 논문
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');

app.listen(3000, function(){console.log('server start')});
app.set('views', './views');
//app.use(bodyParser.urlencoded({extended:false}));
//extened옵션을 true로 주면 nested object를 전달받을 수 있다. 기본값 true
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(requset, response){
  response.render('form.pug');
});

app.get('/user',function(request, response){
  response.send('get:'+request.query.id);
});

app.post('/user',function(request, response){
  console.log(request.body);
  response.send(request.body);
});

app.put('/user',function(request, response){
  console.log(request.body);
  response.send(request.body);
});

app.delete('/user/:id',function(request, response){
  response.send('del:'+request.params.id);
});
