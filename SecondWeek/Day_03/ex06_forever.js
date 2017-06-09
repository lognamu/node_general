//forever start -l ./myApp.log --spinSleepTime 1000 -a ex04_forever.js
// -l => 로그를 남기겠다
// ./myApp.log => 로그경로
// --spinSleepTime => 서버다운 후 다시시작시간(0이면 서버가 종료되지 않은상태에서 다시 서버를 실행시키므로 오류 무한반복
// 1000 => 시간
// -a 모든오류 저장

var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response){
  var pathname = url.parse(request.url).pathname;
  response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  if(pathname == '/'){
    response.end('메인페이지');
  }else{
    throw ('잘못된 경로');
  }
});
server.listen(3000,function(){
  console.log('Server running at http://localhost:3000');
});
