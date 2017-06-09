global.dbConn = require('./db/dbConnection');

const express = require('express');
const http = require('http');
const session = require('express-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const fs = require('fs');
const app = express();
const server = http.createServer(app);

module.exports = server;

server.listen(3000, function(){
  console.log('server start');
});
app.use(session({
  secret: 'haha',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(__dirname + '/resource'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/member', require('./route/member'));
app.use('/visitbook', require('./route/visitbook'));
app.use('/bbs', require('./route/bbs'));
app.use('/chat', require('./route/chat'));

app.get('/', function(request, response){
  fs.readFile('./views/main.ejs', 'utf-8', function(error, data){
    response.send(ejs.render(data));
  });
});

app.get('/menu', function(request, response){
  fs.readFile('./views/menu.ejs', 'utf-8', function(error, data){
    if(request.session.user){
        response.send(ejs.render(data, {name:request.session.user.name}));
    }else{
      response.redirect('/');
    }
  });
});
