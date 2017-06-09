const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

//서버에서 서버로 요청하는 방식은 크게 두가지로 분류된다.

const server = http.createServer(function(request, response){
  var parsedURL = url.parse(request.url);
  var pathname = parsedURL.pathname;
  if(pathname == '/'){
    fs.readFile('./html/index.html', 'utf-8', function(error, data){
      console.log(request.method);
      if(request.method == 'GET'){
        console.log(parsedURL.query);
        var params = querystring.parse(parsedURL.query);
        console.log(params);
        console.log(params.company);
        console.log(params.location[0]);
        console.log(params.location[1]);
        console.log('---------------------------');
      }

      if(request.method == 'POST'){
        request.on('data', function(data){
          console.log(data);
          console.log(data.toString());
          var params = querystring.parse(data.toString());
          console.log(dataArray);
          console.log(params.company);
          //여기는 파라미터 여러개 보낼 때
          console.log(params.location[0]);
          console.log(params.location[1]);
          console.log('---------------------------');
        });
      }
      response.writeHead(200, {'Content-Type':'text/html'});
      response.end(data)
    });
  }
});

server.listen(3000, function(){
  console.log('Server Start!');
});
