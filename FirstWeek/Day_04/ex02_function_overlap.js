//조건문, 반복문을 중첩해서 사용했던것 처럼
//함수또한 함수내부에 다른 함수를 선언하고 이를 사용할 수 있다.

function sayMember1(member1, member2, member3){
  console.log('1번 : '+member1);
  console.log('2번 : '+member2);
  console.log('3번 : '+member3);
  console.log('---------');
  console.log('1번 : '+member1);
  console.log('2번 : '+member2);
  console.log('3번 : '+member3);
  console.log('---------');
  console.log('1번 : '+member1);
  console.log('2번 : '+member2);
  console.log('3번 : '+member3);
}
sayMember1('철수','영희','민수');

//함수 안에서 중복되는 코드를 다시 그룹화 시킨다.
console.log('------------------');
function sayMember2(member1, member2, member3){
  function inner(){
    console.log('1번 : '+member1);
    console.log('2번 : '+member2);
    console.log('3번 : '+member3);
  }

  inner();
  console.log('-----------');
  inner();
  console.log('-----------');
  inner();
}

sayMember2('길동','꺽정','길산');

//함수의 구조를 부모자식관계에 비유를 하면
//전역은 부모, 전역에 선언된 함수는 자식, 함수 안에 언된 함수는 그함수의 자식이 된다.
//자식은 부모의 스코프에 접근할 수 있지만(부모의 변수나 함수를 사용할 수 있지만),
//부모는 자식의 스코프에 접근할 수 없다.

var globalNumber = 2;

function outter(){
  var outterNumber = 5;

  function inner(){
    var innerNumber = 10;
    console.log('#1 '+globalNumber);
    console.log('#2 '+outterNumber);
  }

  console.log('#3 '+globalNumber);
  //console.log(innerNumber);
  inner();
}

//console.log(outterNumber);
outter();
//inner();
