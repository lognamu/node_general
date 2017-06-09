//3.Date클래스
//생성
var now = new Date();
console.log(now.toString());
console.log(now.toTimeString());

var nowTime = now.toTimeString();
console.log(nowTime.substr(0,8));
/*setInterval(function(){
  console.log(new Date().toTimeString().substr(0,8));
},1000);*/

var birthDay = new Date(1991,3,23);

//월은 1월이 0에 해당한다. 12월은 11에 해당한다.
birthDay = new Date(1991,2,23, 12, 30, 5);
console.log(birthDay.toString());

console.log((now - birthDay)/(1000*60*60*24));


//getter와 setter
birthDay.setFullYear(1992);
console.log(birthDay.getFullYear());

birthDay.setMonth(4);
console.log(birthDay.getMonth());

birthDay.setDate(24);
console.log(birthDay.getDate());

birthDay.setHours(13);
birthDay.setMinutes(31);
birthDay.setSeconds(6);
console.log(birthDay.toString());

//실습
//Date클래스의 get함수들을 이용해서 현재날짜와 시간을 'yyyy년 mm월 dd일 hh시 mm분 ss초' 형태로 로 출력하시오.
console.log(now.getFullYear()+'년 '+(now.getMonth()+1)+'월 '+now.getDate()+'일 '
           +now.getHours()+'시 '+now.getMinutes()+'분 '+now.getSeconds()+' 초');
//오늘이 2017년 1월 1일부터 몇일째 인지 출력하시오.
//(만약 오늘이 2017년 1월 2일이면 2라고 출력되어야 한다.)
var firstDay = new Date(2017, 0, 1);
console.log(Math.ceil((now-firstDay)/(1000*60*60*24)));
