//함수의 구조를 살펴보자.
//키워드  함수이름( 파라미터 ){
  //코드
  //return 리턴할 데이터
//}

//1) 파라미터와 리턴값이 없는 함수
function sayMember1(){
  console.log('1번 : 철수');
  console.log('2번 : 영희');
  console.log('3번 : 민수');
}

sayMember1();

//2) 파라미터가가 있고 리턴값은 없는 함수
console.log('-------------');
function sayMember2(member1, member2, member3){
  console.log('1번 : '+member1);
  console.log('2번 : '+member2);
  console.log('3번 : '+member3);
}

sayMember2('홍길동','임꺽정','장길산');
sayMember2('정도전','이방원','이방지');

//3) 파라미터는 없고 리턴값은 없는 함수
console.log('-------------');
function sayMember3(){
  return '철수, 영희, 민수';
}

var members = sayMember3();
console.log(members);

//4)파라미터도 있고 리턴값도 있는 함수
console.log('------------');
function sayMember4(member1, member2, member3){
  var members = member1+', '+member2+', '+member3;
  return members
}
members = sayMember4('길동', '꺽정', '길산');
console.log(members);

//실습
//문제1)
// function printDan(){
//   for(var i=0;i<10;i++){
//     console.log("7 x "+i+" = "+7*i);
//   }
// }

//위의 printDan이라는 함수를 파라미터를 받도록 해서
//7단만 고정으로 출력하는 함수가 아닌
//파라미터로 받은 숫자의 단을 출력하는 함수로 변경하시오.

//ex) printDan(3);
//[출력]
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// ...
// 3 x 9 = 27



//문제2)반지름을 입렵하면 원의 넓이를 반환(return)해주는
//     함수를 정의하고 함수를 호출한 결과를 출력하시오.
//원 둘레를 구하는 공식은 [2*3.14*반지름]
function circleArea(r){
  //return Math.PI*r*r;
  return Math.PI*Math.pow(r, 2);
}
var result = circleArea(10);
console.log(result);
