//supervisor
var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  response.end('<h1>메인페이지~</h1>');
});

server.listen(3000, function(){
  console.log('Server running at http://localhost:3000');
});
