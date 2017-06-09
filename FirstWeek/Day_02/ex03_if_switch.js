

//조건문이란 특정한 조건에 해당할 때 수행하는 문장입니다.
//비가오면 우산을 써라, 오후 6시가 되면 퇴근해라 등등

//조건문에는 두가지 종류가 있습니다.

//1.if문

var age = 19;

if(age > 19){
  console.log("관람 가능합니다");
}else{
  console.log("미성년자는 관람 불가합니다");
}

//if문 바로옆 괄호에는 논리값이 들어가고 해당 논리값이 true이면 다음{}안에 존재하는
//코드가 수행되고 false이면 else다음에 존재하는 {}안의 코도가 수행됩니다.
//만약 논리 값이 false일경우 수행할 코드가 없다면 else{}는 생략가능합니다.

age = 20;

var isAdult = age > 19;
if(isAdult){
  console.log("관람 가능합니다");
}

//if문은 중첩이 가능합니다.
var gender = "female";

if(isAdult){
    console.log("입대 가능하신 나이시군요");
    if(gender == "male"){
        console.log("나머지 개인정보를 입력해주세요");
    }else{
      console.log("여성은 여성전용 메뉴를 이용해 주세요");
    }
}else{
    console.log("미성년자는 입대가 불가능합니다");
}

//조건이 다수일 때는 else if를 사용합니다.
console.log("--------------");

var score = 82;
if( score > 90){
  console.log("A학점입니다.");
}else if(score > 80){
  console.log("B학점입니다.");
}else if(score > 70){
  console.log("C학점입니다.");
}else{
  console.log("F학점입니다.");
}

//switch문
//switch문은 if문중 if-elseif-else구조를 특정한 상황에서 좀더 편하게 사용하기 위해 만들었습니다.
console.log("--------------");
// var grade = 'B';
var grade = 'A';

switch(grade){
  case 'A': console.log('당신의 성적은 A입니다.'); break;
  case 'B': console.log('당신의 성적은 B입니다.'); break;
  case 'C': console.log('당신의 성적은 C입니다.'); break;
  default: console.log('당신의 성적은 F입니다.'); break;
}

//()안에있는 데이터와 case키워드 다음에 오는 데이터를 ===연산자로 비교해서 같으면 실행시킨다.
//default의 용도는 일치하는 case가 없는 경우에 실행되는 코드이다.

// ===연산자로 비교하기 때문에 type이 다르면 다른데이터로 판단한다.
console.log('---------------');
var code = '2';
switch(code){
  case 1: console.log('당신의 성적은 A입니다.'); break;
  case 2: console.log('당신의 성적은 B입니다.'); break;
  case 3: console.log('당신의 성적은 C입니다.'); break;
  default: console.log('당신의 성적은 F입니다.'); break;
}

//각 case마다 break를 걸지 않으면 break키워드를 만날때 까지 실행된다.
console.log('---------------');
code = 2;
switch(code){
  case 1: console.log('당신의 성적은 A입니다.');
  case 2: console.log('당신의 성적은 B입니다.');
  case 3: console.log('당신의 성적은 C입니다.'); break;
  default: console.log('당신의 성적은 F입니다.'); break;
}

//break의 특성을 활용해서 월을 입력하면 해당 월의 마지막 날짜를 알려주는 프로그램을 작성해보자
console.log('-------------');
var readline = require('readline');
var r = readline.createInterface({ input:process.stdin, output:process.stdout });
r.question("몇월이 궁금하십니까?", function(answer) {
  answer = Number(answer);
   switch(answer){
     case 1:
     case 3:
     case 5:
     case 7:
     case 8:
     case 10:
     case 12: console.log('마지막날이 31일입니다.'); break;
     case 4:
     case 6:
     case 9:
     case 11: console.log('마지막날이 30일입니다.'); break;
     case 2: console.log('마지막 날이 28일입니다.'); break;
     default: console.log('잘못된 입력입니다.');
   }
   r.close();
});

/*
  #실습#
  강화도에 있는 해병대의 상근 통역병에 대한 적합성을 검사하는 로직입니다.
  다음 조건문을 보고 출력되는 문장을 작성하시오.
  var gender = "남자";
  var age = 25;
  var location = "강화도";
  var TOEIC = 960;
  if( age < 20){
    console.log("부적합. 사유:나이가 너무 적습니다.");
  }else if( age > 31){
    console.log("부적합. 사유:나이가 너무 많습니다.");
  }else{
    if(gender == "여자"){
      console.log("부적합. 사유:여성은 일반병에 지원하실 수 없습니다.");
    }else{
      if(location == "강화"){
        if(TOEIC > 960){
            console.log("적합. 우선순위:상");
        }else if(TOEIC > 940){
            console.log("적합. 우선순위:중");
        }else{
            console.log("적합. 우선순위:하");
        }
      }else{
        console.log("부적합. 사유:해당 지역에 거주해야만 합니다.");
      }
    }
  }
*/

var gender = "남자";
var age = 25;
var location = "강화도";
var TOEIC = 960;
if( age < 20){
  console.log("부적합. 사유:나이가 너무 적습니다.");
}else if( age > 31){
  console.log("부적합. 사유:나이가 너무 많습니다.");
}else{
  if(gender == "여자"){
    console.log("부적합. 사유:여성은 일반병에 지원하실 수 없습니다.");
  }else{
    if(location == "강화"){
      if(TOEIC > 960){
          console.log("적합. 우선순위:상");
      }else if(TOEIC > 940){
          console.log("적합. 우선순위:중");
      }else{
          console.log("적합. 우선순위:하");
      }
    }else{
      console.log("부적합. 사유:해당 지역에 거주해야만 합니다.");
    }
  }
}
