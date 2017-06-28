const express = require('express');
const socketio = require('socket.io');
const router = express.Router();

module.exports = router;

router.get('/', function(request, response){
  response.render('chat/view', {user:request.session.USER});
});

var io = socketio.listen(server);
io.sockets.on('connection', function(socket){
  //console.log(socket);
  socket.on('broadcast',function(data){
    console.log(data);
    io.sockets.emit('receive', data);
  });
});
