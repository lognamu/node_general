var fs = require('fs');

var song = '퐁당퐁당 돌을 던지자 누나몰래 돌을 던지자\n냇물아 퍼져라 멀리멀리 퍼져라';

//fs.writeFile('./퐁당퐁당.txt', song, 'utf-8');

fs.writeFile('./퐁당퐁당.txt', song, 'utf-8', function(error){
  if(error){
    console.log(error);
    return;
  }
  console.log('파일 쓰기가 완료되었습니다.');
});
