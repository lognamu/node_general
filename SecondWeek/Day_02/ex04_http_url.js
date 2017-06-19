var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){
  var pathname = url.parse(request.url).pathname;
  console.log(pathname);
  response.writeHead(200, {'Content-Type':'text/html'});
  if(pathname == '/'){
    fs.readFile('./html/main.html', 'utf-8', function(error, data){
      response.end(data);
    });
  }else if(pathname == '/login'){
    fs.readFile('./html/login.html', 'utf-8', function(error, data){
      response.end(data);
    });
  }else{
    response.end('<h1>Page Not Found!</h1>');
  }
});

server.listen(3000, function(){
  console.log('Server running at http://localhost:55555');
});
