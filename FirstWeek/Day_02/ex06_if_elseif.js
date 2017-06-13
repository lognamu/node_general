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
