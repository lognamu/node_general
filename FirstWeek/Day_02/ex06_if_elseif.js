var rls = require('readline-sync');
var score  = Number(rls.question("Enter score (0 ~ 100) : "));

//한번에 여러개의 조건을 비교하려면 else if를 사용합니다.
if( score > 90){
  console.log("A학점입니다.");
}else if(score > 80){
  console.log("B학점입니다.");
}else if(score > 70){
  console.log("C학점입니다.");
}else{
  console.log("F학점입니다.");
}


//실습
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

//헬스장 요금계산프로그램작성
//1.사용자로부터 개월수를 입력받는다.(1이상)
//ex) "Enter month (greater than 1) : "
//2. 금액을 출력한다.

//1개월등록비용은 10만원
//2개월등록비용은 18만원
//3개월 등록비용은 24만원
//4개월 이상은 개월수*7만원
