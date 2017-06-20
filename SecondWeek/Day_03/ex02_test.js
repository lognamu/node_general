var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(request, response){
  var pathname = url.parse(request.url).pathname;

  if(pathname == '/'){
    fs.readFile('./html/main.html', 'utf-8', function(error, data){
      response.writeHead(200, {'Content-Type':'text/html'});
      response.end(data);
    });
  }else if(pathname == '/login' && request.method=="GET"){
    fs.readFile('./html/login.html', 'utf-8', function(error, data){
      response.writeHead(200, {'Content-Type':'text/html'});
      response.end(data);
    });
  }else if(pathname == '/login' && request.method=="POST"){
    request.on('data', function(data){
      var params = querystring.parse(data.toString());
      var id = params.id;
      var password = params.password;
      response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
      if(id == 'hong' && password == '1111'){
        var html = '<html><head></head><body><strong>'+id+'</strong>님 반갑습니다.<br>'
                +'<a href="/">메인페이지로 이동</a></body></html>'
        response.end(html);
      }else{
        response.end('비밀번호가 일치하지 않습니다.<br><a href="/">메인페이지로 이동</a>');
      }
    });
  }else if(pathname == '/bbs'){
    response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    response.end('<h1>:::게시판:::</h1>');
  }else if(pathname == '/visit'){
    response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    response.end('<h1>:::방명록:::</h1>');
  }else if(pathname == '/msg'){
    response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    response.end('<h1>:::쪽지:::</h1>');
  }else if(pathname == '/chat'){
    response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    response.end('<h1>:::채팅방:::</h1>');
  }else{
    response.writeHead(404);
    response.end();
  }
});

server.listen(3000, function(){
  console.log('Server running at http://localhost:3000');
});
