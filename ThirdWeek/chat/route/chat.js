const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const socketio = require('socket.io');
const router = express.Router();
const server = require('../app.js');

module.exports = router;

router.get('/', function(request, response){
  fs.readFile('./views/chat/view.ejs', 'utf-8', function(error, data){
    var user = request.session.user;
    if(user){
      response.send(ejs.render(data,{name:user.name}));
    }else{
      response.send(ejs.render(data,{name:'Guest'}));
    }

  });
});

var io = socketio.listen(server);
io.sockets.on('connection', function(socket){
  socket.on('broadcast',function(data){
    console.log(data);
    io.sockets.emit('receive', data);
  });
});
