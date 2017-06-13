//break의 특성을 활용해서 월을 입력하면 해당 월의 마지막 날짜를 알려주는 프로그램을 작성해보자
var rls = require('readline-sync');
console.log('-------------');

var answer = Number(rls.question("Enter month(1 ~ 12) : "));
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
