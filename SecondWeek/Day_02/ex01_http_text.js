var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/html'});
  response.end('<h1>hello NodeJs</h1>');
});

server.listen(55555, function(){
  console.log('Server running at http://localhost:55555');
});
