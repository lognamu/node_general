const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const fs = require('fs');
const app = express();

app.listen(3000, function(){
  console.log('server start');
});

app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function(request, response){

  fs.readFile('./views/index.ejs', 'utf-8', function(error, data){
    console.log(__dirname);
    response.send(ejs.render(data,{filename:__dirname+'/views/layout/?',name:'flynn'}));
  });
});
