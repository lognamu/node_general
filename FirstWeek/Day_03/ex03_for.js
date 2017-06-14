//for문
//for문은 while문을 개량한 것이라고 볼 수 있다.
//while문을 좀 더 사용하기 편하게 구조화 시켜놓은 것이라고 볼 수 있다.
for(var i=1; i<10; i++){
  console.log('5 x '+i+' = '+5*i);
}

console.log('--------------');
//반복문과 배열
var cityArr = ["서울", "대전", "대구", "부산"];
for(var i=0; i<4; i++){
  console.log(cityArr[i]);
}

console.log('--------------');
//자바스크립트만의 개선된 for문
for(var i in cityArr){
  console.log(i);
  console.log(cityArr[i]);
}

console.log('--------------');
for(var city of cityArr){
  console.log(city);
}

//반복문의 중첩
console.log('--------------');
for(var i=3; i>0; i--){
  for(var j=3; j>0; j--){
    console.log('안녕하세요');
  }
  console.log('----------');
}


for(var i=0; i<5; i++){
  for(var j=0; j<5; j++){
    process.stdout.write("*");
  }
  console.log();
}

console.log('--------------');
for(var i=0; i<5; i++){
  for(var j=0; j<i+1; j++){
    process.stdout.write("*");
  }
  console.log();
}

/*
  #과제#
  문제1)중첩 반복문을 이용해서 다음과 같이 출력하시오.
  *****
  ****
  ***
  **
  *


  문제2)중첩 반복문을 사용해서 구구단을 2단부터 9단까지 출력하시오.
  예상출력결과)
  2 x 1 = 2
  2 x 2 = 4
      .
      .
      .
  9 x 8 = 72
  9 x 9 = 81
*/
