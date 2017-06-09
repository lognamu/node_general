//변수란 데이터를 저장했다가 다시 꺼내 사용할 수 있는 일종의 박스, 그릇과 같은 존재입니다.
//특정 사이트의 로그인 유무, 슈팅게임의 현재 레벨이나 점수, 쇼핑몰의 장바구니에 담긴 상품목록등도 변수에 저장됩니다.
//이처럼 변수는 프로그래밍에서 없어서는 안될 중요한 개념입니다.

//변수 선언(내가 이러한 변수를 사용하겠다 라고 적어놓기)
//var키워드 변수명
var score;

//데이터 저장
//변수명 = 데이터(리터럴)
//리터럴이란 데이터를 의미하는 문자를 뜻한다. 즉 9999는 구천구백구십구라는 숫자데이터를 상징하는 숫자리터럴이다.
score = 9999;

//선언과 동시에 데이터 저장
var level = 7;
var name = '테트리스 고수';

//변수사용(데이터 가져오기)
console.log('이름:'+name);
console.log('레벨:'+level);
console.log('점수:'+score);

//한줄에 여러개의 변수 선언( + 초기화)
var productName = 'mac book', price = '$3000', manufacturer = 'Apple';
console.log('----------------');
console.log('제품명:'+productName);
console.log('가격:'+price);
console.log('제조사:'+manufacturer);

//변수선언 시 반드시 지켜야되는 사항
//  1)이름이 중복되면 안된다. 중복되면 덮어쓰기가 된다.
var name = '테트리스 중수';
console.log(name);

//  2)숫자로 시작해서는 안된다.
//var 1bun = 'jang';

//  3)name과 namE은 전혀 다른 변수다.(덮어쓰기가 안된다.)
var namE = '테트리스 하수';
console.log(name);
console.log(namE);

//  4)키워드(예약어) 사용 금지!(atom은 키워드를 사용할 경우 보라색으로 표기해주기 때문에 해깔릴 일이 없다)
//var var = 20;

//변수선인 시 권장사항(오류는 나지 않지만 개발자사이에서의 암묵적 약속)
//  1)띄어쓰기가 안되므로 낙타표기(camelCase)법 사용하자
/*var product name = 'i pad';
console.log(product name);*/
var myFullName = 'Dong Hyeuk Jang';
//또는
var my_full_name = "장동혁";

//  2)상수(변하지 않을 값)은 변수명을 모두 대문자로 사용(가독성 증가, 실수방지)
//    아톰에서는 상수를 노란색으로 표기해준다.
const DB_NAME = "My SQL";
//상수는 프로그램이 실행되는 내내 변하지 않는 값만 담아두는 변수이다.

//위와 같이 상수의 값을 바꿔도 값이 바뀌지 않는다.
DB_NAME = "Oracle";
console.log(DB_NAME);

/*
  #실습#
  변수 선언 규칙에 위배되지 않도록 두개의 변수를 선언하고
  하나에는 숫자, 하나에는 문자를 저장한 뒤 console.log(); 함수로 출력해보자!
*/
