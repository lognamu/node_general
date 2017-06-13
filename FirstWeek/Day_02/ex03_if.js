//조건문이란 특정한 조건에 해당할 때 수행하는 문장입니다.
//비가오면 우산을 써라, 오후 6시가 되면 퇴근해라 등등

var age = 19;

if(age > 19){
  console.log("관람 가능합니다");
}

if(age <= 19){
  console.log("관람 가능합니다");
}

//if문 바로옆 괄호에는 논리값이 들어가고 해당 논리값이 true이면 다음{}안에 존재하는
//코드가 수행되고 false이면 else다음에 존재하는 {}안의 코도가 수행됩니다.
//만약 논리 값이 false일경우 수행할 코드가 없다면 else{}는 생략가능합니다.


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
