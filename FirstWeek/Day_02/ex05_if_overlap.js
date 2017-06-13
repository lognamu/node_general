var readlineSync = require('readline-sync');

var age = Number(readlineSync.question("Enter user age : "));

var gender = readlineSync.question("Enter your gender (male / female) : ");

if(age > 0){
  console.log("입대 가능하신 나이시군요");
  if(gender == "male"){
    console.log("나머지 개인정보를 입력해주세요");
  }else{
    console.log("여성은 여성전용 메뉴를 이용해 주세요");
  }
}else{
  console.log("미성년자는 입대가 불가능합니다");
}
