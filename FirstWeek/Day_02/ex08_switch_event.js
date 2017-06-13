var rls = require('readline-sync');

var month  = rls.question("Enter month (greater than 1) : ");

//각 case마다 break를 걸지 않으면 break키워드를 만날때 까지 실행된다.
console.log('--------------------------------------');
console.log('----사은품목록----');
switch(Number(month)){
  default :
    console.log("1개월 쿠폰");
  case 3 :
    console.log("러닝화");
  case 2 :
    console.log("운동장갑");
  case 1 :
    console.log("손목보호대");
}
