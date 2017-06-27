var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//정적라우팅
//정적자원들을 제일먼저 로드할 수 있도록 상단에 등록
app.listen(3000, function(request, response){console.log('server start');});

app.set('views', './myViews');

app.use(express.static(__dirname+'/public'));
//app.use('/css', express.static(__dirname+'/public/css'));
//app.use('/js', express.static(__dirname+'/public/js'));



app.get('/bbs/list', function(request, response){
  response.render('bbs/list_static.pug');
});
