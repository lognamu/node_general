//연산자란 데이터를 조작할 때 사용하는 것으로 대부분 특수문자로 이루어져 있다.

//1.숫자연산자(산술연산자, 사칙연산지라고도 불림) - 숫자와 함께 사용되는 연산자
//종류 [+, -, *, /, %]
console.log('-----숫자연선자-----');

var number1 = 12;
var number2 = 5;
var result = number1 + number2;
console.log("+:"+result);

//result라는 변수에 저장된 값을 바꾼다.
result = number1 - number2;
console.log("-:"+result);

result = number1 * number2;
console.log("*:"+result);

result = number1 / number2;
console.log("/:"+result);

//%연산자는 나눈 뒤 몫을 제외한 나머지 값만 반환한다.
result = number1 % number2;
console.log("%:"+result);

number1 = 12.5;
result = number1 % number2;
console.log("%:"+result);


//2.문자연산자
//종류 [+] --> 딱 하나밖에 없으며 문자와 문자를 연결시키는 역할을 한다.
console.log('-----문자연산자-----');
var string1 = '철수';
var string2 = '영희';
console.log(string1 + '와 ' + string2);

//그럼 숫자와 문자를 연결시키면 어떤결과가 나타날까?
console.log(string1 + number1 + number2);
console.log(number1 + number2 + string1);
//  같은 +라서 연산우선순위가 같기 때문에 왼쪽 + 부터 연산이 진행된다.

//1.숫자가 문자로 "형변환"된다. --> 형변환은 뒤에서 따로 배울것이다.
//2.문자와 문자가 이어진다.

//숫자말고도 다른 데이터와도 연산이 진행된다.
var boolean1 = true;
console.log(string1 + boolean1);
console.log(string1 + {});

//3.대입연산자 & 복합연산자
//종류 [=, +=, -=, *=, /=, %=]
console.log('-----대입연산자 & 복합대입연산자-----');
//자바스크립트에서 =은 수학기호에서 equal처럼 "양쪽의 값이 같음"을 의미하는 것이 아닌
//변수에 값을 저장(대입)하는 용도로 사용
var score1 = 50;
score1 = score1 + 20;
console.log(score1);

//이것을 줄여서 쓰고 싶다면?
var score2 = 50
score2 += 20;
console.log(score2);

//마찬가지로
var score3 = 50;
score3 -= 20;
//이것의 결과는 score3 = score3 - 20; 과 같다.
console.log(score3);

//4. 증감연산자
//종류[++, --]
console.log('-----증감연산자-----');
var one = 1;
//one = one +1;
//one += 1;
//++one;
one++;
console.log(one);

//그렇다면 연산자를 앞에 붙이는 것과 뒤에 붙이는것에 차이점은 무엇인가요?
//답은 연산순위입니다. 앞에붙이면 1순위 뒤에붙이면 꼴지순위가 됩니다.
var zero = 0;
console.log("++zero:" + ++zero);
console.log("zero:" + zero);

//zero의 값을 다시 0으로 저장
zero = 0;
//zero++했지만 꼴지순위기이 때문에 zero값이 출력이 된 후에 zero = zero + 1이 수행됩니다.
console.log("zero++:" + zero++);
//따라서 이곳에서는 zero는 1이라고 출력이됩니다.
console.log("zero:" + zero);
//후위 증감연산자는 개발자간에 왠만하면 사용하지 않는 것으로 약속이 되어 있습니다.

//나머지 연산자는 해당 챕터에서 알려드리도록 하겠다.
/*
  #실습#
  1.위 처럼 *=, /=, %=을 사용한 뒤 예상한 값이 맞는지 console.log()로 출력해 보시오.

  2.아래 코드의 결과를 예측해보세요.
  var two = 2;
    2-1 : console.log(two++);
    2-2 : console.log(two--);
    2-3 : console.log(--two);
*/
var two = 2
console.log(two++);
console.log(two--);
console.log(++two);

//비교연산자
//종류[>, >=, <, <=, ==, ===, !=, !==]이며 연산자기준으로 좌우에 존재하는 값(변수, 리터럴)을
//비교를 해서 비교를 한 뒤 결과를 boolean(true, false)로 반환을 한다.
console.log("---------------");
var comp1 = 1 > 2;
var comp2 = -2 > -2;
var comp3 = 3 < 3.0000001;
var comp4 = 4 == "4";
var comp5 = 5 === "5";
var comp6 = 6 != "6";
var comp7 = 7 !== "7";


console.log("comp1",comp1);
console.log("comp2",comp2);
console.log("comp3",comp3);
console.log("comp4",comp4);
console.log("comp5",comp5);
console.log("comp6",comp6);
console.log("comp7",comp7);


//논리연산자
//종류[&&, ||]이며 연산자기준으로 좌우에 존재하는 값(변수, 리터럴)을
//비교를 해서 비교를 한 뒤 결과를 boolean(true, false)로 반환을 한다.
console.log('---------------');

var logi1 = true && true;
var logi2 = true && false;
var logi3 = true && false && false;
var logi4 = true || true;
var logi5 = true || false;
var logi6 = false || true || false;
