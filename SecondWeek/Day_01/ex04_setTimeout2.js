function sayHello(){
  console.log('hello everone~!');
}

//실행되는데 무조건 1초가 넘게걸리는 함수
function sayBye(){
  var stop = new Date().getTime();
  while(new Date().getTime() < stop + 1000) {}
  console.log('good bye~!');
}

setTimeout(sayHello, 0);
sayBye();
