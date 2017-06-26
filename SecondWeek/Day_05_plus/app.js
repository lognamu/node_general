//db설정 -> 나중에 설명하자.
var dbConfig = require('./db/db_config');
var mysql = require('mysql');
global.client = mysql.createConnection(dbConfig);

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
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
