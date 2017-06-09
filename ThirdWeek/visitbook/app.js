global.dbConn = require('./db/dbConnection');

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const fs = require('fs');
const app = express();


app.listen(3000, function(){
  console.log('server start');
});
app.use(session({
  secret: 'haha',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(__dirname + '/resource'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(request, response){
  fs.readFile('./view/main.ejs', 'utf-8', function(error, data){
    console.log(request.ip);
    response.send(ejs.render(data));
  });
});

app.use('/member', require('./route/member'));
app.use('/visitbook', require('./route/visitbook'));
