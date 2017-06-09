var http = require('http');
var fs = require('fs');
var mysql = require('')l

var server = http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/html'});
  fs.readFile('./html/hello.html', 'utf-8', function(error, data){
    response.end(data);
  });
});

server.listen(55555, function(){
  console.log('Server running at http://localhost:55555');
});
