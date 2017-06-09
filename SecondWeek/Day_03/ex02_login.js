var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(request, response){
  var pathname = url.parse(request.url).pathname;
  response.writeHead(200, {'Content-Type':'text/html'});
  if(pathname == '/'){
    fs.readFile('./html/main.html', 'utf-8', function(error, data){
      response.end(data);
    });
  }else if(pathname == '/login' && request.method=="GET"){
    fs.readFile('./html/login.html', 'utf-8', function(error, data){
      //정적html을 반환
      //정적이란 의미는 움직이는 동적의 반댓말로 이미 생성되어있는 HTML을 말한다.
      //이미 생성되어있는 HTML이기 때문에 항상 똑같은 페이지이다.
      response.end(data);
    });
  }else if(pathname == '/login' && request.method=="POST"){
    //폼으로부터 전달된 데이터를 변수에 저장!
    request.on('data', function(data){
      //console.log(data);
      //console.log(data.toString());
      var params = querystring.parse(data.toString());
      var id = params.id;
      var password = params.password;
      console.log(id, password);
      response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
      //동적html을 반환
      //동적이란 의미는 움직인다는 말로 그때 그때 상황에 맞게 HTML을 새로 만든다는 것이다.
      //새로만드는 HTML이기 때문에 항상 다른 페이지이다.
      var html = '<html><head></head><body><strong>'+id+'</strong>님 반갑습니다.</body></html>';
      response.end(html);

      //정적 VS 동적
      //정적HTML은 미리 만들어 놓을 수 있기 때문에 유용한 에디터를 사용해서 HTML을 코딩할 수 있다.
      //하지만 동적HTML은 html코드에 자바스크립트 데이터를 포함시켜야 하기 때문에 문자열로 생성해야 함으로
      //하드코딩을 할 수 밖에 없으므로 코딩이 비효율적이다. 하지만 동적HTML은 페이지를 그때 그때 동적으로
      //생성함으로써 데이터를 포함시킨다는 엄청난 장점이다. 즉 사용자로부터 전달받은 데이터나 데이터베이스에
      //저장되어있는 데이터를 가지고 페이지를 만들수 있다.

      //시시각각 변하는 뉴스나, 데이터베이스에 저장되어있는 게시물의 정보를 보여주는 게시판 같은경우는 정적 HTML을
      //통해서 구현하기란 불가능에 가깝다. 개발자가 새로운 뉴스를 바탕으로 쉴새없이 HTML을 만들어야 되고
      //데이터베이스에 존재하는 데이터를 가지고 게시물 하나하나마다 새로운HTML을 만들어야하기 때문이다.

      //다음시간에 배울 ejs나 jade라는 템플릿엔진은 이 두가지 방식의 결합해서 코딩은 정적HTML방식으로 하면서
      //데이터를 중간중간 끼워 넣을 수 있게 해준다.
    });
  }else{
    response.end('<h1>Page Not Found!</h1>');
  }
});

server.listen(55555, function(){

  console.log('Server running at http://localhost:55555');
});
