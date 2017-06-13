//바로 전시간에 설명했듯이 부모는 자식의 scope에 접근하지 못한다.
//하지만 closure를 사용하면 간접적으로 가능하다.

function counterMaker(){
  var count = 0;
  function counter(){
    count = count+1
    return count;
  }
  return counter;
}
//counter를 클로저라고 볼수 있다.
var counter = counterMaker();

//함수는 스택에 적재되고 실행이 종료되면 스택에서 삭제된다.
//하지만 내부함수인 counter가 리턴되었고 counter내부에서 counterMaker함수의 count라는 변수를 사용하고 있다.
//coutermaker함수는 실행이 되었기 때문에 폐쇄(close)되었지만 내부함수가 자신의 변수를 사용하고 있기 떄문에 메모리에서 삭제되지 않고 남아있게 된다.
//이러한 현상, 상태, 기법을 closure라고 한다.
//count라는 변수를 전역변수로 선언하지 않고 closure를 이용하면 무분별한 전역변수 남용을 줄일 수 있다.
//전역변수가 늘어나면 프로그램의 복잡도가 늘어난다(변수명 중복으로인한 버그, 의도치 않은 전역변수 접근)

console.log(counter());
console.log(counter());
console.log(counter());
//이처럼 반환된 counter라는 함수를 통해서 count변수의 값을 계속 접근할 수 있다.
//클로저를 사용하면 항상 메모리에 counterMaker의 스코프가 저장이 되어있다. 즉 메모리를 차지하고 있다.
//만약 클로저를 삭제하고 싶다면 counter = null을 해주면 된다.

//자바스크립트를 객체지향 프로그래밍언어처럼 이용해 보겠다.
//객체지향이라는 개념은 한번도 설명하지 않았지만 현재는 대충 이런것이다 정도로만 이해해도 된다.
function personMaker(){
  var name;
  function getName(){
    return name;
  }

  function setName(){
    name = arguments[0];
  }

  return {'getName':getName, 'setName':setName};
}


var person = personMaker();

//외부에서 name이라는 변수를 이름으로 직접접근할 수 없기 때문에 name은 캡슐화되어있는 상태이다.
person.setName('장동혁');
console.log(person.getName());
person.setName('flynn');
console.log(person.getName());
//즉 setName이라는 함수를 선언하지 않으면 값을 함부로 변경할 수 없고
//getName이라는 함수를 선언하지 값을 지정할수는 있지만 가져올 수는 없다.
//이런식으로 변수의 접근권한(읽기, 쓰기)를 지정하는 것을 캡슐화라고 한다.

//뒤에서 배울 클래스와 객체를 배우면 위에서와 같이 객체지향 프로그래밍을 할 수 있다.
//하지만 캡슐화는 무조건 클로저를 사용해야만 구현 가능하다.

//이처럼 클로저는 함수의 특성을 이용해서 객체지향 프로그래밍의 특징을 이용할 수 있다.
//이는 스크립트 언어라는 한계를 극복해주는 중요한 개념이다.
//클로저를 완벽히 이해하기 위해서는 객체지향이라는 거대하고 복잡한 개념을 이해하고 넘어가야한다.
//이는 많은 시간과 노력을 필요로할 뿐만 아니라 현 시점에서 공부하는 것은 시기상조라고 생각한다.
//어쩌다 보니 의돕다 더 깊게 설명했는데 현 시점에서는 클로저가 무엇이고 생성하는 정도만 알아두어도 무방하다.
