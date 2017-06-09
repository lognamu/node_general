//JSON은 자바스크립트 객체를 리터럴로 생성할 때 사용하는 표기법이다.
//이 표기법은 사람과 컴퓨터가 모두 이해하기 쉬운 구조로 되어있다.
//다른 두 개의 플랫폼간에 데이터를 주고받을때 XML이나 JSON을 주로 사용한다.
//ex) C언어로 만들어진 프로그램 <->자바로 만들어진 프로그램, 안드로이드 어플리케이션 <-> 웹어플리케이션

//저번시간에 배웠던 car라는 객체를 클래스가 아닌 리터럴로 생성해 보겠다.
//구조를 보면 중괄호안에 변수명:데이터 형식을 따른다.
var myCar = {model:'i8',
             manufacturer:'bmw',
             drive:function(){console.log('부웅!');},
             break:function(){console.log('끼익');}
           };
console.log(myCar.model);
myCar.drive();

//변수명:데이터형식이기 때문에 변수에 담을수 있는 것들은 모두 저장할 수 있다.
//숫자, 문자, 논리, 배열, 클래스, 객체 등
var everthing = {myNumber:0, myString:'hi~', myBoolean:true, myArray:[10, 20, 30],
                 myFuntion:function(){}, MyClass:function(){}, myObject:{name:'flynn', age:10}  }

console.log(everthing);
