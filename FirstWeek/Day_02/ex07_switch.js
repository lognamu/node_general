var rls = require('readline-sync');

var month  = rls.question("Enter month (greater than 1) : ");

switch(month){
  case "1" :
    console.log("이용요금 : 10만원");
    break;
  case "2" :
    console.log("이용요금 : 18만원");
    break;
  case "3" :
    console.log("이용요금 : 24만원");
    break;
  default :
    console.log("이용요금 : ",month * 7,"만원");
}


//()안에있는 데이터와 case키워드 다음에 오는 데이터를 ===연산자로 비교해서 같으면 실행시킨다.
//default의 용도는 일치하는 case가 없는 경우에 실행되는 코드이다.

// ===연산자로 비교하기 때문에 type이 다르면 다른데이터로 판단한다.
console.log('--------------------------------------');
switch(month){
  case 1 :
    console.log("이용요금 : 10만원");
    break;
  case 2 :
    console.log("이용요금 : 18만원");
    break;
  case 3 :
    console.log("이용요금 : 24만원");
    break;
  default :
    console.log("이용요금 : ",month * 7,"만원");
}
