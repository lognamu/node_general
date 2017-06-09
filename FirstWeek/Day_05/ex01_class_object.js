//함수가 특정 기능을 하는 코드를 그룹화하는 개념이라면
//클래스는 연관된 변수들과 함수들을 그룹화 하는 개념이다.

//전교생이 1000명인데 반이 딱 한개밖에 존재하지 않는다라고 상상해보자.
//과연 통제가 될까?
//회사의 판매제품들을 거대한 하나의 창고에 구분없이 보관한다고 상상해보자.
//주문이 들어오면 해당 제품을 찾는데만 하루종일 걸릴 수도 있다.

//이 때문에 학교에서는 학년과 반을 지정하고
//회사에서는 창고의 구역을 지정하고 제품을 보관할것이다.

//프로그래밍에서도 마찬가지다.
//현재 프로그램이 매우 복잡해서 선언된 함수가 1000개라고 가정해 보자.
//기능이 변경되어 함수내부를 수정해야는데 함수를 찾는데 애를 먹을것이다.

//학교에서 학생들을 반(class)으로 통제하는 것처럼
//자바스크립트에서도 변수와 함수를 class라는 개념으로로 정리하고 분별할 수 있다.

//현재프로그램은 웹어플리케이션이라서
//회원가입과 관련된 기능, login과 관련된 기능이 존재한다고 가정해보겠다.
//그럼 각 기능마다 여러개의 변수와 함수가 정의되어야 한다.

var regDate;
function join(){}
function quit(){}

var loginCount;
var isLogined;
function login(){}
function logout(){}

//비슷한 성향의 변수와 함수들을 모아서 클래스를 만들자.
//함수처럼 보일수 있지만 function키워드를 사용해서 클래스를 정의한 것이다.
function Join(){
  //함수일경우 변수선언을 var로 하지만 클래스는 this를 사용한다.
  //this는 클래스(객체) 자신을 의미한다.
  this.regDate;
  this.join = function(){
    console.log('가입 되셨습니다.');
    this.regDate = new Date();
  }
  this.quit = function(){
    console.log('탈퇴 되셨습니다.');
  }
}

function Login(){
  this.loginCount = 0;
  this.isLogined = false;
  this.login = function(){
    if(this.isLogined){
      console.log('이미 로그인 중입니다');
      return;
    }
    this.isLogined = true;
    this.loginCount++;
    console.log('환영합니다.');
  }
  this.logout = function(){
    if(isLogined == false){
      console.log('이미 로그아웃 되셨습니다.');
      return;
    }
    this.isLogined = false;
    console.log('안녕히 가십시오');
  }
}

//해당 클래스로부터 객체를 생성한다. new키워드를 사용한다.
var joiner = new Join();
var loginer = new Login();

//해당 객체가 가지고있는 변수나 함수를 사용할 수 있다.
joiner.join();
console.log(joiner.regDate);
joiner.quit();

console.log('--------');
loginer.login();
console.log(loginer.isLogined);
loginer.login();
loginer.logout();


// 다시 말하지만, 클래스는 성향이 비슷한 변수와 클래스들을 그룹화한 개념이다.
// 클래스에 정의되어있는 변수나 함수를 사용하려면 해당클래스로부터 객체를 생성해야 한다.
// 우리는 객체를 통해서 변수나 함수를 이용할 수 있다.
//객체를 더 생성해 보자.

var loginer2 = new Login();
loginer2.login();

//loginer와  loginer2는 둘다 Login클래스로부터 생성된 객체지만 별도의 객체이다.
console.log("loginer:"+loginer.isLogined);
console.log("loginer2:"+loginer2.isLogined);

//한장의 자동차 설계도로 두대의 BMW를 생성했다고 가정해보자.
//생산 당시 생김새나 기능은 똑같지만 한대를 빨간색으로 도색한다고 나머지 한대도 빨간색으로 도색되는것은 아니다.
//즉, 자동차설계도는 클래스이다. 생산 두대의 자동차는 각각의 객체이다.

//실습
//문제1) Car라는 클래스를 정의해 보자
//      model, manufacturer라는 변수가 있고
//      drive , break, getInfo라는 함수가 있다.
//      ex) drive -> console.log('부웅~~!!');
//
//문제 2) Car라는 클래스로부터 객체 두개를 생성하고 model, manufacturer변수에 값을 저장하자
//      ex) model = 'i8';
//          manufacturer = 'BMW';
//문제 3) 객체를 이용하여 함수를 실행해 보자.

function Car(model, manufacturer){
  this.model = model;
  this.manufacturer = manufacturer;
  this.drive = function(){console.log('부웅~~');};
  this.break = function(){console.log('끼익!!');};
  this.getInfo = function(){
    console.log('해당 차량의 정보입니다.');
    console.log('차종:'+this.model);
    console.log('제조사:'+this.manufacturer);
  }
}

var myDreamCar = new Car('i8', 'BMW');
myDreamCar.model = '528i';
myDreamCar.drive();
myDreamCar.break();
myDreamCar.getInfo();
