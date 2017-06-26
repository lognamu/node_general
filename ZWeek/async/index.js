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

async.waterfall([
  function(callback){
    fs.readFile('number.txt', 'utf-8', callback);
  },
  function(data, callback){
    fs.writeFile('number_copy.txt', data, callback);
  }
], function(error){
  console.log('파일복사 완료');
});
