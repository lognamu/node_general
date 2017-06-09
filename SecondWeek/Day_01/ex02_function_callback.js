//콜백함수란 비동기함수를 호출할 때 파라미터로 넘겨주는 함수로
//해당 콜백함수가 종료되고 실행해야 할(callback)코드를 함수로 만들어 놓은 것이다.

//파일을 읽어오는 비동기함수를 사용해보자.
//모듈을 사용해 볼건데 다음주에 자세히 배울 것이므로 그냥 따라서 타이핑해보세요.
//모듈을 불러옵니다.
var fs = require('fs');

//텍스트 파일을 하나 만들어주세요.

//파일을 읽어온 뒤 실행할 함수를 정의해주세요.
function afterRead(error, data){
  if(!error){
    console.log(data);
  }
}

fs.readFile('./애국가.txt', 'utf-8', afterRead);

//현재 모듈을 읽어오는 코드 외에 실행되는 함수는 두개 입니다.
//바로 readFile과 afterRead!
//readFile은 파일로부터 데이터를 읽어옵니다.
//afterRead는 읽어온 데이터를 출력합니다.

//readFile은 비동기함수입니다. 즉, 동기함수와 싱크를 맞출 수 없습니다.
//하지만 읽어온 데이터를 출력하기위해서는 읽어오는 작업이 끝나는 타이밍을 알야 합니다.
//이러한 문제를 해결해기 위해 콜백함수가 존재합니다.

//저번시간에 배웠던 코드실행구조를 다시 공부해 봅시다.

//이처럼 콜백함수는 타이밍을 맞추지 않는 비동기함수와 타이밍일 맞추기 위해 사용하는 함수입니다.

//그럼 파일을 읽었으니 파일을 써볼까요?
var song = '퐁당퐁당 돌을 던지자 누나몰래 돌을 던지자\n냇물아 퍼져라 멀리멀리 퍼져라';
/*fs.writeFile('./비행기.txt', song, 'utf-8', function(error){
  console.log(error);
});*/

//이런식으로 함수의 이름 대신 함수선언문 자체(리터럴) 파라미터로 넣어줄 수 있다.
//이러한 이름 없는 함수를 익명함수라고 한다.
//익명함수는 한번만 사용되고 쓰이지 않는 함수를 사용할 때 쓰는 함수선언 방식이다.

//사실 비동기 함수가 실행된 뒤 실행할 로직이 없다면 파라미터로 null을 집어 넣거나
//아예 파라미터를 집어 넣지 않으면 된다.

fs.writeFile('./퐁당퐁당.txt', song, 'utf-8');

//모듈 사용 및 파일시스템은 다음주에 더 자세히 알아보는 시간들 가질게요!
