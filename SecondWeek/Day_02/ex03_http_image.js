var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'image/jpg'});
  fs.readFile('./image/sky.jpg', function(error, data){
    response.end(data);
  });
});

server.listen(3000, function(){
  console.log('Server running at http://localhost:55555');
});
