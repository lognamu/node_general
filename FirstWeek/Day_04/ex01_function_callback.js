//콜백 함수란 함수 호출 시 파라미터로 넘겨주는 함수를 말합니다.
function print_eng(msg){
  console.log('result'+msg);
}

function print_kor(msg){
  console.log('결과:'+msg);
}


function sum(num1, num2, call){
  var result = num1 + num2;
  call(result);
}

sum(10, 20, print_eng);
sum(20, 30, print_kor);

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

//콜백함수는 함수를 사용하는 입장에서 해당함수를 컨트롤할 수 있다는 큰 장점이 있습니다.
//api같은경우는 우리가 직접 함수를 수정하기 힘듭니다.
//따라서 많은 api함수들은 함수를 설계할때 콜백함수를 적용하여 함수를 사용하는 입장에서
//어느정도 커스터마이징 할 수 있도록 허락해줍니다.
