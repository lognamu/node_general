//node.js라는 프로그램이 프로그램을 실행하려면 자바스크립트 엔진을 로드(가동)합니다.
//이때 수많은 클래스를 선언하고 객체도 만듭니다. 이러한 클래스와 객체들을 묶어서
//자바스크립트 코어라이브러리라고 부릅니다. 우리는 코어라이브러리를 자바스크립트 파일 어디서든 사용할 수 있습니다.

//1. Math클래스
// Math객체는 수학과 관련된 상수(파이, 로그 등)과
//함수(반올림, 제곱, 싸인, 코싸인 등)를 가지고 있습니다.
//이 중 자주쓰이는 것 위주로 살펴보겠습니다.

//----------함수-----------
//랜덤
console.log(Math.random());
console.log(Math.random()*10);

//절대값
console.log(Math.abs(-10));

//올림
console.log(Math.ceil(5.000001));

//내림
console.log(Math.floor(5.999999));

//반올림
console.log(Math.round(10.4999));
console.log(Math.round(10.5));

//제곱
console.log(Math.pow(-2, 3));

//제곱근
console.log(Math.sqrt(2));

//로그
console.log(Math.log2(8));

//----------상수---------------
//파이
console.log(Math.PI);
Math.PI = 0;
console.log(Math.PI);

//자연상수 e
console.log(Math.E);

//실습
//1 ~ 45사이의 정수를 랜덤하게 출력해 보세요.(random(), floor()사용)
console.log("로또",Math.floor((Math.random()*45)) + 1)
