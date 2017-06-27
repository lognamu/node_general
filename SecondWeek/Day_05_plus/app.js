var dbConfig = require('./db/db_config');
var mysql = require('mysql');
global.dbPool = mysql.createPool(dbConfig);

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.listen(3000, function(){
  console.log('server start');
});

app.use(bodyParser.urlencoded({extended:false}));


app.get('/', function(request, response){
  response.type('text/html');
  response.send('<h1>Root Page</h1>');
});

app.use('/musician', require('./route/musician'));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(error, request, response, next) {
  // set locals, only providing error in development
  if(app.get('env') === 'development'){
    response.render('error', {message:error.message,
                         status:error.status||500,
                         error:error});
  }else{
    response.status(error.status || 500);
    response.render('error_product');
    //에러 종류에 따라 다른 에러페이지를 보여줄 수 있다.
  }
});
