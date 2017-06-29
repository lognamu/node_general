const express = require('express');
const router = express.Router();

module.exports = router

router.get('/', function(request, response){
  response.render('msg/view', {user:request.session.USER});
});

var rooms = [
             {roomName:'apple', users:[]},
             {roomName:'banana', users:[]},
             {roomName:'tomato', users:[]}
            ]

io.sockets.on('connection', function(socket){
  //console.log(socket);
  socket.on('join', function(data){
    switch(data.roomName){
      case 'apple':
        socket.roomNum = 0;
        break;
      case 'banana':
        socket.roomNum = 1;
        break;
      case 'tomato':
        socket.roomNum = 2;
        break;
      default:
        socket.roomNum = 0;
    }

    io.sockets.in(data.roomName).emit('update_users',
      {id:socket.id, name:data.name});
    socket.join(data.roomName);

    rooms[socket.roomNum].users.push({id:socket.id, name:data.name});
    socket.emit('view_users', rooms[socket.roomNum].users);


    socket.on('sendTo', function(data){
      io.sockets.in(data.roomName).sockets[data.to].emit(
        'receive_msg', {name:data.name, msg:data.msg}
      );
    });
  });

  socket.on('exit', function(data){
    var users = rooms[socket.roomNum].users;
    socket.leave(data.roomName);
    for(var i in users){
      if(users[i].id == socket.id){
        users.splice(i, 1);
        break;
      }
    }
    io.sockets.in(data.roomName).emit('view_users', rooms[socket.roomNum].users);
  });
});
