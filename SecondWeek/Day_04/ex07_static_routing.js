var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//정적라우팅
//정적자원들을 제일먼저 로드할 수 있도록 상단에 등록
//보통 js(자바스크립트 라이브러리(jquery, ajax등)또는 css등을 제공할때 사용
app.listen(3000, function(request, response){console.log('server start');});
//app.use(express.static(__dirname+'/public'));
app.use('/css', express.static(__dirname+'/public/css'));
app.use('/js', express.static(__dirname+'/public/js'));
app.set('views', './myViews');

app.get('/bbs/list', function(request, response){
  response.render('bbs/list_static.pug');
});
