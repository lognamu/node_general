//자바스크립트에서 존재하는 데이터의 종류(타입) 즉,
//리터럴의 종류는 크게 8가지정도 있다.

//1.숫자
var myNumber = 100;
var myNumber2 = 9.99;

//2.문자(열)
//문자 리터럴의경우 싱글쿼테이션 또는 더블쿼테이션 둘다 사용이 가능하다.
var myString = 'A';
var myString2 = "안녕하세요";

//3. 논리(참 또는 거짓)
var myBoolean = true;
var myBoolean2 = false;

//4.함수(아직 안배움)
var myFunction = function(){
  //함수내용
};

//5.클래스(아직 안배움)
var myClass = function(){
  //클래스내용
};

//6.객체(아직 안배움)
var myObject = new myClass();
var myObject2 = {
  //객체내용
};

//7. undefined
//undefined란 변수에 값이 한번도 저장되지 않은 상태에서
//해당 변수를 출력했을 때 출력되는 값
var myUndefined;
console.log('myUndefined:'+myUndefined);

//8. null
//null은 '아무 값도 존재하지 않는다'라는 뜻이며 undefined와 비슷하게 보이지만
//엄연히 초기화가 되어있는 상태이므로 다른 상태이다.
var myNull = null;
console.log('myNull:'+myNull);

//typeof라는 키워드는 뒤에 오는 데이터(변수명 또는 리터럴)의 자료형을 검사하는 키워드이다.
console.log('------------------');
console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myFunction);
console.log(typeof myObject);
console.log(typeof myUndefined);
console.log(typeof myNull);

//사실 null은 object(객체)이다.
//몇몇의 자료형들은 '빈 값'을 뜻하는 리터럴이 존재하는데
//숫자일경우 0
//문자일경우 '' 또는 ""
//객체일경우 null이다.
//자세한 내용은 객체를 공부할 때 다시 배우도록 하겠다.

/*
  #실습#
  자바스크립트의 자료형들을 console.log()로 출력해보세요!
*/
