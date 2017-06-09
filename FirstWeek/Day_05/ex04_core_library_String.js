//2.String클래스
var name = 'flynn';
var name2 = new String('flynn');

console.log(name);
console.log(name2);
console.log(name2.toString());
console.log(name == name2);
//===연산자는 값은 물론 타입까지 같은지 비교해주는 연산자이다.
console.log(name === name2);
console.log(name === name2.toString());

//string타입과 String타입의 다른점을 알겠는가?
//String클래스로 문자열을 생성하면 string의 데이터 + 여러 함수를 같는 객체라고 보면 된다.

var greeting = new String('hello');
console.log(greeting.length);

console.log('hello'.length);
//잘 되는 이유는 V8엔진이 내부적으로 이렇게 처리한다.
console.log(new String('hello').length);

//따라서 그냥 리터럴방식으로 string을 쉽게 생성하고
//String의 함수를 사용하자

//그럼 toSting()함수와 length라는 상수를 사용해 봤다.

//charAt() - 특정 위치의 문자 구하기
console.log('hello'.charAt(1));
var alphabet = 'abcdefg';

/*var i=0;
var timer = setInterval(function(){
  console.log(alphabet.charAt(i));
  i++;
  if(i == alphabet.length){
    clearInterval(timer);
  }
},1000);*/



//indexOf() - 문자열의 위치 찾기
console.log('hello world'.indexOf('o'));

//두번째 파라미터로 문자를 찾는 위치를 지정할 수 있다.
//넣지 않으면 0 즉, 문자열 맨 처음부터 찾는다.
console.log('hello world'.indexOf('o', 5));

//여러 글자를 찾는것도 물론 가능하다.
console.log('hello world'.indexOf('world'));
//찾지 못하면 -1을 반환한다.
console.log('hello world'.indexOf('wolrd'));

//lastIndexOf() -문자열의 위치찾기(마지막 단어)
console.log('apple application appear'.lastIndexOf('app'));

//slice() - 문자열 잘라내기
console.log('abcdefg'.slice(2,4));

//substr() - 문자열 잘라내기
console.log('abcdefg'.substr(2,4));

//replace() - 문자열 대체하기
console.log('010$1234$5678'.replace('$','-'));

var replaceall = require('replaceall');
console.log(replaceall('$','-','010$1234$5678'));

//문자열을 배열로 만들기
var result = '010-8245-5105'.split('-');
console.log(result);

console.log('------------');
//실습
//문제1)
//slice함수 또는 substr함수를 사용해서 '01012345678'을 '010-1234-5678'로 바꾸시오.
var phoneNum = '01012345678';
/*var newPhoneNum1 = phoneNum.slice(0,3);
var newPhoneNum2 = phoneNum.slice(3,7);
var newPhoneNum3 = phoneNum.slice(7,11);
var newPhoneNum = newPhoneNum1+'-'+newPhoneNum2+'-'+newPhoneNum3;*/

var newPhoneNum1 = phoneNum.substr(0,3);
var newPhoneNum2 = phoneNum.substr(3,4);
var newPhoneNum3 = phoneNum.substr(7,4);
var newPhoneNum = newPhoneNum1+'-'+newPhoneNum2+'-'+newPhoneNum3;
console.log(newPhoneNum);
console.log('-----------');

//문제2)
//replace또는 replaceall을 이용해서 '010-1234-5678'을 '01012345678'로 바꾸시오.
newPhoneNum = newPhoneNum.replace('-','');
newPhoneNum = newPhoneNum.replace('-','');
console.log(newPhoneNum);
