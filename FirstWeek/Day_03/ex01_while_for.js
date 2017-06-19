var rls = require('readline-sync');
//반복문은 일련의 코드를 특정한 조건동안 반복해서 실행하게 합니다.
//반복문의 종류는 크게 while문과 for문이 있습니다.

//while문
//while문은 if과 비슷한 형태입니다. ()안에 조건이 참이면 {}안의 코드가 실행됩니다.
//단, 코드가 실행되고나서 다시 ()안에 조건이 참인지 검사를 합니다.
var myBoolean = true;
while(myBoolean){
  console.log('여러분 반갑습니다.');
  var choice = rls.question("Do you want to continue? (y | n) : ");
  if(choice != "y"){
    myBoolean = false;
  }
}

//()안에는 항상 true이기 때문에 해당 while문은 무한반복을 돕니다.
//무한반복을 돌면 프로그램이 해당 while문에 묶여있기 때문에 다음코드를 진행할 수 없습니다.
//따라서 while문으로 반복을 돌다가 특정한 상황일경우 ()안에 false를 넣어 주도록 {}에 코드를 넣어줘야합니다.

//while
var count = 10;
while(count > 0){
  console.log(count+'초 남았습니다.');
  --count;
  //1초동안 프로그램을 멈추는 코드
}

//그럼 실제로 해당 기능을 구현해 보겠습니다.
// count = 10;
// while(count > 0){
//   sleep(1000, function(){
//     console.log(count+'초 남았습니다.');
//     --count;
//   });
// }


//현재상황에서 이 함수는 그냥 컴퓨터를 1초동안 쉬게 만드는 함수라는 정도로만 알아두시면 됩니다.
function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {}
    callback();
}

//for문
//for문은 while문을 개량한 것이라고 볼 수 있다.
//while문을 좀 더 사용하기 편하게(?) 구조화 시켜놓은 것이라고 볼 수 있다.
console.log('-----------');
for(var i=1; i<10; i++){
  console.log('5 x '+i+' = '+5*i);
}

//for문의 ()안의 구조를 살펴보자.
//var i = 1; --> 이부분은 반복문 내에서 사용할 지역변수를 선언하고 초기화한것이다.
//while문에서 count와 같다고 볼 수 있다.
// i < 10 -->이부분은 비교식으로 결과가 참이어야만 반복을 실행한다.
//while문에서 ()안과 같다고 볼 수 있다.
//i++ --> 이부분은 반복이 실행된 후 마지막으로 실행되는 코드로
//보통 증감식을 넣어준다. while문의 --count와 같다고 볼 수 있다.
//코드의 실행순서는 1)var i=0;
//2)i<10을 비교 후 결과가 true이면 3번으로 아니면 반복문 종료
//3){}내의 코드 실행
//4)i++ 실행후 2번으로
//결국 i가 10이되면 반복문 종료 즉, i가 처음 초기화된 값인 1부터 9까지 아홉번 반복

//중첩 반복문
//if문이 중첩이 될 수 있던 것 처럼 for문과 while문도 중첩해서 사용할 수 있다.
console.log('---------');
for(var i=3; i>0; i--){
  for(var j=3; j>0; j--){
    console.log('안녕하세요');
  }
  console.log('----------');
}


/*
  #실습#
  문제1)반복문을 이용해서 다음과 같이 출력하시오.

  *
  **
  ***
  ****
  *****

  문제2)중첩 반복문을 사용해서 구구단을 2단부터 9단까지 출력하시오.
  예상출력결과)
  2 x 1 = 2
  2 x 2 = 4
      .
      .
      .
  9 x 8 = 72
  9 x 9 = 81
*/
