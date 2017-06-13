var rls = require('readline-sync');


//if문을 사용해서 주차료 계산 프로그램을 만들어 주세요
//주차 기본료는 2000원입니다.
//매 30분마다 1000원이 추가됩니다.
//ex) 0~29분 - > 2000원, 30분 ~ 59분 -> 3000원, 60분 ~ 89분 4000원 ...
//3시간(180)이상일 경우 종일요금인 9000원으로 동결됩니다.
//ex) 150분 ~ 179분 7000원, 180분 이상 -> 8000원
//parseInt(9.5)  -> 9, parseInt(10) -> 10, parseInt(0.1) -> 0;

var time = rls.question("Enter How long parking (minute) : ");
var fee;
//-------------------
if(time > 180){
  fee = 8000;
}else{
  fee = 2000 + parseInt(time/30)*1000;
}
//-------------------
console.log("요금 : ",fee);


//switch문을 활용해서 할인/할증기능을 추가하세요.
//차량의 종류는 소형, 중형, 대형이 있습니다.
//소형차는 할인이 20%적용되어 80%금액만 적용됩니다.
//대형차는 할증이 20%부과되어 120퍼센트의 금액이 적용됩니다.

var kindOfCar = rls.question("Enter kind of car (small | middle | big) : ");
//-------------------
switch(kindOfCar){
  case 'small':
    fee = fee*0.8; break;
  case 'big':
    fee = fee*1.2; break;
}
//-------------------
console.log("할인/할증 적용 요금",fee);
