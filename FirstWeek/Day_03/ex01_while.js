var rls = require('readline-sync');
//반복문은 일련의 코드를 특정한 조건동안 반복해서 실행하게 합니다.
//반복문의 종류는 크게 while문과 for문이 있습니다.

//while문
//while문은 if과 비슷한 형태입니다. ()안에 조건이 참이면 {}안의 코드가 실행됩니다.
//단, 코드가 실행되고나서 다시 ()안에 조건이 참인지 검사를 합니다.
while(true){
  console.log('여러분 반갑습니다.');
}

var myBoolean = true;
while(myBoolean){
  console.log('여러분 반갑습니다.');
  var choice = rls.question("Do you want to continue? (y | n) : ");
  if(choice != "y"){
    myBoolean = false;
  }
}
