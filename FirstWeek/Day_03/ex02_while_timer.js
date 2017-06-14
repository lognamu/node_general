
var count = 10;
// while(count > 0){
//   console.log(count+'초 남았습니다.');
//   --count;
//   //1초동안 프로그램을 멈추는 코드
// }

//그럼 실제로 해당 기능을 구현해 보겠습니다.
while(count > 0){
  sleep(1000, function(){
    console.log(count+'초 남았습니다.');
    --count;
  });
}

//현재상황에서 이 함수는 그냥 컴퓨터를 1초동안 쉬게 만드는 함수라는 정도로만 알아두시면 됩니다.
function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {}
    callback();
}
