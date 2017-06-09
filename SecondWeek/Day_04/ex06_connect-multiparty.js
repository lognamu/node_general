//npm install connect-multiparty --save
const express = require('express');
const multiparty = require('connect-multiparty');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();




app.use(bodyParser.urlencoded({extended:false}));
//제한용량설정
app.use(multiparty({
  maxFilesSize:5*1024*1024,
  uploadDir:__dirname + '/upload'

}));

app.get('/', function(request, response){
  response.send('<h1>메인페이지</h1>');
});

app.get('/fileupload',function(request, response){
  fs.readFile('./html/fileupload.html','utf-8',function(error, data){
    response.send(data);
  });
});

app.post('/fileupload',function(request, response){
  console.log(request.body);
  console.log(request.files);
  response.redirect('/');
});

//
app.post('/fileupload2',function(request, response){
  console.log(request.body);
  console.log(request.files);
  var imageFile = request.files.file;
  if(imageFile){
    var name = imageFile.name;
    var path = imageFile.path;
    var type = imageFile.type;

    //이미지 파일인지 확인
    if(type.indexOf('image') != -1){
      //이미지 파일일 경우 이름을 변경한다.
      var newPath = __dirname + '/upload/'+Date.now()+'_'+name;
      fs.rename(path, newPath, function(error){
        response.redirect('/');
      });
    }else{
      //이미지 파일이 아닌경우 : 파일을 제거한다.
      fs.unlink(path, function(error){
        response.send('이미지 파일만 전송 가능합니다.');
      });
    }
  }else{
    //파일이 없을 경우
    response.send('파일이 존재하지 않습니다.');
  }

});

app.listen(3000, function(){
  console.log('server start');
});
