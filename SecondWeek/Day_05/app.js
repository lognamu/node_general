var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.listen(3000, function(){
  console.log('server start');
});

app.set('views', './views');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(request, response){
  response.type('text/html');
  response.send('<h1>Root Page</h1>');
});

app.use('/musician', require('./route/musician'));
