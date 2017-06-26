//npm install connect-multiparty --save
const express = require('express');
const multiparty = require('connect-multiparty');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, function(){console.log('Server Start');});
app.set('views', './myViews');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/upload', express.static(__dirname+'/upload'));

//제한용량설정
app.use(multiparty({
  //제한용량설정
  maxFilesSize:3*1024*1024,
  //업로드폴더설정
  uploadDir:__dirname + '/upload'

}));

app.get('/', function(request, response){
  response.send('<h1>메인페이지</h1>');
});

app.get('/fileupload',function(request, response){
  response.render('upload/fileupload.pug');
});

app.post('/fileupload',function(request, response){
  console.log(request.body);
  console.log(request.files);
  var imageFile;
  if(request.files.file instanceof Array){
    imageFile = request.files.file[0];
  }else{
    imageFile = request.files.file
  }
  //var imageFile = request.files.file[0];
  if(imageFile){
    var name = imageFile.name;
    var path = imageFile.path;
    var type = imageFile.type;

    //이미지 파일인지 확인
    if(type.indexOf('image') != -1){
      //이미지 파일일 경우 이름을 변경한다.
      var newName = +Date.now()+'_'+imageFile.name;
      var newPath = __dirname + '/upload/' + newName;
      fs.rename(imageFile.path, newPath, function(error){
        response.render("upload/viewImage.pug",{comment:request.body.comment, path:"/upload/"+newName});
      });
    }else{
      //이미지 파일이 아닌경우 파일을 제거한다.
      fs.unlink(path, function(error){
        response.send('이미지 파일만 전송 가능합니다.');
      });
    }
  }else{
    //파일이 없을 경우
    response.send('파일이 존재하지 않습니다.');
  }

});

app.get('/500', function(req, res){
  throw "에러발생";
});

//404에러
app.use(function(request, response, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//500에러
app.use(function(error, request, response, next){

  if(error.status == 404){
    response.send("페이지를 찾을 수 없습니다.");
  }else if(error.stack != undefined && error.stack.indexOf('maximum file length exceeded') != -1){
    response.render('error/error.pug', {msg:"파일용량이 너무 큽니다."});
  }else{
    response.status(500).send("서버에러입니다. 잠시후 다시 시도해주세요!");
  }
});
