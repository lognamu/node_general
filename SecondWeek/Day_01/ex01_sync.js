var fs = require('fs');

function sayHello(){
  console.log('hello everyone~!');
}
function afterRead(data){
  console.log('----읽어온 결과----');
  console.log(data);
}

var data = fs.readFileSync("./애국가.txt", "utf-8");

afterRead(data);

sayHello();
