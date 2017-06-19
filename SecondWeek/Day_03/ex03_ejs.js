//EJS(Embedded JavaScript template)
//EJS는 nodejs의 템플릿엔진중의 하나입니다.
//템플릿 엔진이란 html코드를 동적으로 생성해주는 엔진으로
//정적 html문서를 코딩하듯이 하면서 중간중간에 자바스크립트 코드(주로 조건문, 반복문과 변수(데이터)를
//끼워넣어서 문서를 만들면 나중에 템플릿 엔진이 자바스크립트 코드를 HTML코드로 변환시켜 최종적으로는
//동적인 HTML문서를 만들어 준다.

//npm install ejs
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
//npm install ejs
var ejs = require('ejs');

var server = http.createServer(function(request, response){
  var pathname = url.parse(request.url).pathname;
  response.writeHead(200, {'Content-Type':'text/html; charset="utf-8"'});
  if(pathname == '/'){
    response.end('<h1>메인페이지</h1>');
  }else if(pathname == '/user'){
    fs.readFile('./ejs/user.ejs','utf-8', function(error, data){
      var page = ejs.render(data, {'title':'MyPage', 'name':'Flynn'});
      response.end(page);
    });
  }
});

server.listen(3000, function(){
  console.log('Server running at http://localhost:55555');
});
//ejs는 앞으로 계속 사용할 것이므로 완벽히 습득하지 못했다고 불안해 하지 말자
