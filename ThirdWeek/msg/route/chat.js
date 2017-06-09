const express = require('express');
const fs = require('fs');
const ejs = require('ejs');

const router = express.Router();


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
