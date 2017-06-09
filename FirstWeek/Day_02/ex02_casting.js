//형변환이란 자료형(데이터 타입)이 변경되는 것을 말한다.
//형변환의 종류로는 명시적 형변환과 암시적 형변환이 있다.
//명시적 형변환이란 개발자(프로그래머)가 직접 코드로 데이터의 타입을 변환시키는 것을 말하며
//암시적 형변환이란 자바스크립트엔진(V8)이 자동으로 데이터의 타입을 변환시키는 것을 말한다.

//암시적 형변환
//암시적 형변환은 서로다른 데이터간에 연산이 일어날 때 V8이 한 쪽의 데이터를 다른 한쪽의 데이터형태로
//변형 한 뒤 연산을 진행하게 됩니다.
var myNumber = 5;
var myString = "100";
var myBoolean = true;

//숫자와 문자를 +연산하게 되면 숫자타입데이터를 문자타입으로 변환합니다.
// 5 --> "5";
var result = myNumber + myString;
console.log("숫자+문자:"+result);

//숫자와 boolean를 +, -, *, /, %(숫자연산, 산술연산)하게 되면
//boolean을 숫자로 변환합니다. (true --> 1, false --> 0)
result = myNumber + myBoolean;
console.log("숫자+논리:"+result);

//문자와 boolean을 +연산하게 되면 boolean을 문자로 변환합니다.
//하지만 -, *, /, % 연산을 하게 되면 문자를 숫자로 ("100" --> 100)
//boolean도 숫자로 (true --> 1, false --> 0) 변환합니다.
// true --> "true", false --> "false"
result = myString + myBoolean;
console.log("문자+논리:"+result);

result = myString - myBoolean;
console.log("문자-논리:"+result);
myString = "100a";

result = myString * myBoolean;
console.log("문자-논리(문자가 숫자형태가 아님):"+result);

//NaN은 Not a Number의 줄임말로 NaN도 하나의 타입으로 간주된다.
//문자가 숫자로 형변환 되지 못했으나 개발자라 연산을 진행하였다.
//따라서 결과는 NaN이 반환되었고 출력되었다.


//명시적 형변환
//명시적 형변환은 개발자가 직접 코드를 타이핑해서 데이터의 타입을 변환시키는 것을 말합니다.

//문자를 숫자로 형변환
console.log('---------------------');
var stringValue = "123.456";
var numberValue = Number(stringValue);
console.log(numberValue);
console.log(typeof numberValue);

stringValue = "f";
numberValue = parseInt(stringValue, 16);
console.log(numberValue);

stringValue = "1011010";
numberValue = parseInt(stringValue, 2);
console.log(numberValue);

console.log('---------------------');
//숫자를 문자로 형변환
stringValue = String(numberValue);
console.log(stringValue);
console.log(typeof stringValue);

numberValue = 30;
stringValue = numberValue.toString(16);
console.log(stringValue);

stringValue = numberValue.toString(2);
console.log(stringValue);


/*
  #실습#
  문제1)암시적형변환에서 문자를 숫자로 형변환 시킬수 있는 방법에 대해서 생각해보세요.

  문제2)다음 코드를 해당 결과가 출력되도록 각각 형변환 시켜보세요
  [코드]
  var testNumber = 20;
  var testString = "f";
  var testBoolean = true;
  console.log(testNumber+testString);
  [출력]
  2015

*/
console.log('-----테스트-----');
var testNumber = 20;
var testString = "f";
var testBoolean = true;
console.log(String(testNumber)+parseInt(testString, 16));
