//콜백 함수란 함수 호출 시 파라미터로 넘겨주는 함수를 말합니다.

function print_eng(msg){
  console.log('result:'+msg);
}

function print_kor(msg){
  console.log('결과:'+msg);
}

function sum1(num1, num2){
  var result = num1 + num2;
  print_eng(result);
}

function sum2(num1, num2){
  var result = num1 + num2;
  print_kor(result);
}

//콜백함수를 통해서 함수의 기능을 유연하게 할 수 있습니다.
function sum3(num1, num2, call){
  var result = num1 + num2;
  //함수를 정의할 때는 특정한 로직(함수의 본질적인 기능외에 부가적인 로직)을
  //파라미터로 받은 함수가 대체하도록 합니다.
  call(result);
}

//함수를 사용(호출)할 때 사용자는 함수의 특정한 로직을 커스터마이징 할 수 있습니다.
sum3(10, 20, print_eng);
sum3(20, 30, print_kor);

//일반적으로 콜백함수는 커스터마이징을 위해 사용되므로
//재사용이 필요 없는 익명함수를 사용합니다.
sum3(30, 40, function(msg){
  console.log("結果:",msg);
});

//이부분은 나중에 다시 배울겁니다. 지금은 따라만 해주세요.
var fs = require('fs');

fs.readFile('./퐁당퐁당.txt','utf-8', showFile);

function showFile(error, data){
  if(error){
    console.log('파일을 읽는 도중 에러가 발생했습니다.');
    console.log('에러내용:'+error);
  }else{
    console.log(data);
  }
}

//콜백함수는 함수를 사용하는 입장에서 해당함수를 커스터마이징할 수 있다는 큰 장점이 있습니다.
//api같은경우는 우리가 직접 함수를 수정하기 힘듭니다.
//따라서 많은 api함수들은 함수를 설계할때 콜백함수를 적용하여 함수를 사용하는 입장에서
//어느정도 커스터마이징 할 수 있도록 허락해줍니다.
