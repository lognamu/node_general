var fs = require('fs');

function sayHello(){
  console.log('hello everone~!');
}

function afterRead(error, data){
  if(error != null){
    console.log('읽어오는 도중 에러 발생');
    return;
  }
  console.log('----읽어온 결과----')
  console.log(data);
}

fs.readFile('./애국가.txt', 'utf-8', afterRead);
sayHello();
