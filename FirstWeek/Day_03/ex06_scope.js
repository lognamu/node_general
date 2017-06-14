//자바스크립트에는 유효범위(scope)이라는 개념이 존재한다.

//1.전역 scope: 전역scope란 현재 작성하고 있는
//ex04_scope.js라는 프로그램의 영역이다.

//이곳에서 변수를 선언하면 전역scope에 변수가 저장이 된다.
var name = '장동혁';
var age = 28;

function sum(num1, num2){
  var funcName = "sum";
  console.log(num1+num2);
}
//이곳에서 함수를 선언하면 함수의 내용이 전역scope에 저장이 된다.
function sayHello(){
  //함수 내부에서 변수를 선언하면 이 함수 scope(지역스코프)에 저장이 된다.
  //각 scope은 별도의 공간이기 때문에 동일한 이름의 변수를 선언해도 덮어쓰기가 되지 않는다.
  var name = 'flynn';

  //sayHello함수 내에는 scopechain이라는 객체가 있고 이를 통해
  //전역과 연결이 되기 때문에 전역scope에 있는 age라는 변수에 접근할 수 있다.
  console.log(age + "살 이시군요");

  //또한 지역스코프에 있는 sum이라는 함수에도 접근 할 수 있다.
  sum(10, 20);

  //현재 지역스코프와 전역스코프에  name이라는 변수가 둘다 존재한다.
  //이때 name이라는 변수에 접근하면 지역스코프에서 먼저 변수를 찾고
  //없으면 전역스코프에서 변수를 찾는다.
  console.log(name + "님 안녕하세요");


}

//sayHello라는 함수를 호출() 하면 그때 함수 scope이 만들어진다.
sayHello();

//프로그램을 실행하면 전역scope이 만들어진다.


//전역스코프에서 지역스코프안에 있는 변수에 접근할 수 없다.
//console.log(funcName);

//함수 뿐만 아니라 조건문 반복문도 scope을 가진다.
if(true){
  //if문의 scope영역
  while(true){
    //while문의 scope영역
    switch(name){
      case '장동혁':
        sayHello();
    }
  }
}
