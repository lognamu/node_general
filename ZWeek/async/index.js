const async = require('async');
const fs = require('fs');

//파일복사 1)파일 읽기, 2)파일 쓰기
/*
fs.readFile('./number.txt' ,'utf-8', function(error, data){
  fs.writeFile('./number_copy.txt',  data, function(error){
    console.log('파일 복사 완료');
  });
});
*/

// async.waterfall([
//   function(callback){
//     fs.readFile('number1.txt', 'utf-8', callback);
//   },
//   function(data){
//     console.log(data);
//   }
// ],
// function(error){
//   console.log(error);
// });

async.waterfall([
  function(callback1){
    fs.readFile('number.txt', 'utf-8', callback1);
  },
  function(data, callback2){
    console.log(data);
    fs.writeFile('../test/copy.txt', data, 'utf-8', callback2);
  },
  function(){
    console.log('파일 복사 완료');
  }
],
function(error){
  console.log(error);
});
