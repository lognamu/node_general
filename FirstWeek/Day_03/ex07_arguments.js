//각 함수scope에는 arguments라는 배열이 존재하며
//이 배열을 통해 파라미터를 관리한다.

function sayMember1(member1, member2){
  console.log('1-1 : '+member1);
  console.log('1-2 : '+arguments[0]);
  console.log('2-1 : '+member2);
  console.log('2-2 : '+arguments[1]);
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
