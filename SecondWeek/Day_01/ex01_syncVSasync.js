//함수는 동기함수와 비동기함수로 나눌 수 있다.
//동기란 한자로 풀이하면 같은 기간을 말한다. (17학번 동기들 할 때 도 같은 한자를 씀)
//즉 타이밍을 맞춘다 라는 것입니다.

//여태까지 우리가 접했던 함수들을 모두 동기함수였다.
//즉 자바스크립트 엔진이 실행해야 될 함수들을 하나씩 차례대로 처리하는 구조였다.
function a(){
  console.log('a');
}

function b(){
  console.log('b');
}

function c(){
  console.log('c');
}

c();
b();
a();

//자바스크립트 엔진이 c, b, a순서대로 함수로르 실행시켰다.
//이를 타임라인으로 그려보면 다음과 같다.

//c라는 함수를 실행하는데 걸리는 시간이 1시간이라고 b라는 함수는 c라는 함수의
//실행이 끝나기 전까지는 호출되지 못한다. 즉 이 말은!! 동시에 두가지의 일을 수행할 수 없다는 것이다.
//다른 프로그래밍 언어들을 스레드라는 개념을 사용해서 동시에 두가지 이상의 일을 수행합니다.

//하지만 javascript라는 언어는 thread를 사용할 수 없는 구조였으므로 비동기함수라는 개념을 도입했다.
console.log('-------');

function myFunc(){
  console.log('async');
}

setTimeout(myFunc, 1);

b();

//b()라는 함수가 먼저 실행이 되었고 3초후에 setTimeout()이라는 함수에 파라미터로 넣어준
//function(){console.log('async')}라는 함수가 실행되었다.
//그럼현재 실행된 함수는 setTimeout, callback, b이다.

//함수가 실행된 타임라인을 그림으로 그려보면 다음과 같다.

//그럼 이를 좀더 자세한 그림으로 알아보자


//이 함수들이 동시에 실행된다는것을 확인해 보겠다.
console.log('-----');
setTimeout(myFunc, 1000);
setTimeout(myFunc, 1000);
setTimeout(myFunc, 1000);
setTimeout(myFunc, 1000);

//비동기 처리의 장점은 실행시간이 오래걸리는 로직(뒤에서 배울 파일입출력 등) 을
//일반 함수로 만들어 놓고 실행하게 되면 해당 로직을 만났을 때 해당 코드를 실행하느라 바빠서
//다음 코드는 실행되지 못하고 기다리게 된다. 즉 사용자의 입장에서는 렉이 걸린다고 생각한다.
//따라서 두개 이상의 로직을 동시에 실행시키기 위해서 비동기 함수가 꼭 필요하다.
