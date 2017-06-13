var readlineSync = require('readline-sync');
// var result = readlineSync.question("Insert your age");
// var age = Number(result);
var age = Number(readlineSync.question("Enter your age : "));
console.log("My age", age);

var isAdult = age > 19;
if(isAdult){
  console.log("관람 가능합니다");
}else{
  console.log("관람 불가입니다.");
}
