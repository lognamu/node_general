//자바스크립트에는 유효범위(scope)이라는 개념이 존재한다.

//1.전역 scope: 전역scope란 현재 작성하고 있는
//ex04_scope.js라는 프로그램의 영역이다.

//이곳에서 변수를 선언하면 전역scope에 변수가 저장이 된다.
var name = '장동혁';
var age = 28;

//이곳에서 함수를 선언하면 함수의 내용이 전역scope에 저장이 된다.
function sayHello(){
  //함수 내부에서 변수를 선언하면 이 함수 scope에 저장이 된다.
  var name = 'flynn';

  //각 scope은 별도의 공간이기 때문에 동일한 이름의 변수를 선언해도 덮어쓰기가 되지 않는다.
  console.log(name + "님 안녕하세요");

  //sayHello함수 내에는 scopechain이라는 객체가 있고 이를 통해
  //전역과 연결이 되기 때문에 전역scope에 있는 age라는 함수에 접근할 수 있다.
  console.log(age + "살 이시군요");
}

//sayHello라는 함수를 호출() 하면 그때 함수 scope이 만들어진다.
sayHello();

//프로그램을 실행하면 전역scope이 만들어진다.

//각 함수scope에는 arguments라는 객체가 존재하며
//아 객체는 통해 파라미터를 관리한다.

function sayMember1(member1, member2){
  console.log('1번-1 : '+member1);
  console.log('1번-2 : '+arguments[0]);
  console.log('2번-1 : '+member2);
  console.log('2번-2 : '+arguments[1]);
}

sayMember1('철수','영희');

//함수scope에 존재하는 arguments는 파라미터의 배열이다.

//함수선언시 파라미터를 받는부분을 없에보겠다.
console.log('-----------');
function sayMember2(){
  //console.log('1번-1 : '+member1);
  console.log('1번-2 : '+arguments[0]);
  //console.log('2번-1 : '+member2);
  console.log('2번-2 : '+arguments[1]);
}

//sayMember2는 파라미터를 받지 않지만 한번 억지로 파라미터를 넣어보겠다.
sayMember2('길동','꺽정');
//arguments가 파라미터를 관리하기 때문에 별도로 파라미터를 받지 않아도 된다.

//그렇다면 이런식으로 파라미터의 갯수에 따라서 다른기능을 하는 함수를 정의할 수도 있다.
console.log('------------');
function sum(){
  if(arguments.length == 0){
    console.log('숫자를 입력해 주세요');
  }else if(arguments.length == 1){
    console.log(arguments[0]);
  }else if(arguments.length == 2){
    console.log(arguments[0] + arguments[1]);
  }
}
sum();
sum(10);
sum(10, 20);
