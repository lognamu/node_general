//영어, 한국, 프랑스의 인삿말을 세번 출력하는 프로그램을 만들어 보자!
/*console.log('hi');
console.log('안녕하세요');
console.log('bonjour');
console.log('-------------');
console.log('hi');
console.log('안녕하세요');
console.log('bonjour');
console.log('-------------');
console.log('hi');
console.log('안녕하세요');
console.log('bonjour');
console.log('-------------');*/

//이 코드에는 중복되는 부분이 존재한다.
/*console.log('안녕하세요');
console.log('bonjour');
console.log('-------------');*/

//여기서 함수를 사용하게 되면 중복되는 코드들을 그룹화 하여
//한번만 코딩을 하고 해당 함수를 호출하기만 하면 된다.

//sayHello라는 함수를 선언한다.
function sayHello(){
  console.log('hi');
  console.log('안녕하세요');
  console.log('bonjour');
  console.log('-------------');
}

//sayHello라는 함수를 세번 호출한다.
//이것이바로 함수의 첫번째 특징 재사용성이다.
sayHello();
sayHello();
sayHello();

//여기서 잠시 집고 넘어갈 부분이 있다.
//그냥 코드를 한번만 작성하고 복사(ctrl + c)한 뒤 필요할때 마다 붙여넣기(ctrl + v)하면
//힘수를 사용하지 않아도 코드를 한번만 작성하고 여러번 사용할 수 있다.
//맞다. 사실 복사/붙여넣기만 잘 사용해도 함수의 첫번째 기능인 재사용성이라는 기능을 해결할 수 있다.
//하지만 함수에는 기능이 한가지 더 존재한다.
//바로 유지보수 용이성이라는 기능이다.
//만약 bonjour라는 인삿말 대신 아프리카 인삿말인 jambo로 수정한다라고 가정해보겠다.

//함수를 사용하지 않았다면
console.log('hi');
console.log('안녕하세요');
console.log('jambo');
console.log('-------------');
console.log('hi');
console.log('안녕하세요');
console.log('jambo');
console.log('-------------');
console.log('hi');
console.log('안녕하세요');
console.log('jambo');
console.log('-------------');
//원래코드를 지운뒤 세군대를 수정하거나 또는 하나만 수정한뒤 또 복사/붙여넣기를 하면 된다.
//하지만 함수의 경우 한번 선언하고 재사용을 하기 때문에 함수내에서 한 군데만 수정하면 끝난다.

function sayHello(){
  console.log('hi');
  console.log('안녕하세요');
  console.log('jambo');
  console.log('-------------');
}

//한번 수정하나 세번수정하나 거기서 거기아니냐라고 생각하실 수 도 있는데
//극단적으로 생각해서 만약 저 4줄의 코드를 세번이 아닌 1억번 사용했다라고 생각해 보자.
//언제 1억번을 고치고 있을 건가. 코드를 고치다 늙어 죽을 수도 있겠다....

//이처럼 함수란 특정힌 기능을 하는 코드의 집합을 재사용하기 위해 묶어놓은 것

//한 번 선언하면 마음대로 여러번 호출할 수 있다.(재사용성)
//코드의 수정이 필요할 경우 여러군데에서 함수를 호출했다 하더라도
//함수 내부의 코드만 수정하면 모두다 반영이 된다.

//실습
//문제 1) 7단을 출력하는 for문을 선언하고 다섯번 복사/붙여넣기 하시오.
//문제 2) 1)에서 선언한 다섯개의 for문이 7단이 아닌 4단을 출력하도록 수정하시오.
//문제 3) 7단을 출력하는 for문이 존재하는 함수를 만든 뒤 다섯번 호출하시오.
//문제 4) 3)에서 선언한 함수를 7단이 아닌 4단을 출력하도록 수정하시오.
