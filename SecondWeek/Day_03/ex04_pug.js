//템플릿 엔진이란 html코드를 동적으로 생성해주는 엔진으로
//정적 html문서를 코딩하듯이 하면서 중간중간에 자바스크립트 코드(주로 조건문, 반복문과 변수(데이터)를
//끼워넣어서 문서를 만들면 나중에 템플릿 엔진이 자바스크립트 코드를 HTML코드로 변환시켜 최종적으로는
//동적인 HTML문서를 만들어 준다.
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
//npm install pug
var pug = require('pug');

var server = http.createServer(function(request, response){
  var pathname = url.parse(request.url).pathname;

  if(pathname == '/'){
    response.writeHead(200, {'Content-Type':'text/html; charset="utf-8"'});
    response.end('<h1>메인페이지</h1>');
  }else if(pathname == '/user'){
    fs.readFile('./pug/index.pug','utf-8', function(error, data){
      //console.log(data);
      var fn = pug.compile(data,{"filename":"./pug/includes"});
      response.writeHead(200, {'Content-Type':'text/html; charset="utf-8"'});
      response.end(fn(
        {title:'myPage',name:'flynn'}
      ));
    });
  }else if(pathname == '/js/my.js'){
    fs.readFile('./js/my.js','utf-8',function(error, data){
      response.writeHead(200, {'Content-Type':'text/javascript; charset="utf-8"'});
      response.end(data);
    });
  }
});

server.listen(3000, function(){
  console.log('Server running at http://localhost:3000');
});
//pug도 앞으로 계속 사용할 것이므로 완벽히 습득하지 못했다고 불안해 하지 말자
