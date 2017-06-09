//4.Array클래스
//여태까지는 배열을 리터럴방식으로 만들어 봤다.
//String클래스처럼 배열은 Array라는 클래스를 이용해서도 만들수 있다.

//var cityArray = new Array();
var cityArray = new Array(6);
console.log(cityArray.length);
cityArray[0] = '서울';
cityArray[1] = '부산';
cityArray[2] = '인천';
console.log(cityArray);

//리터럴로 생성을 하든 클래스로 생성을하든 둘다 Array클래스의 함수를 활용할 수 있다.
//push() & pop() 맨 마지막에 요소추가 & 제거
cityArray.push('대구');
console.log(cityArray[3]);
console.log(cityArray.pop());

//shift() & unshift() 맨앞에 요소제거 & 추가
console.log(cityArray);
cityArray.shift();
console.log(cityArray);
cityArray.unshift('제주');
console.log(cityArray);

//concat() 두개의 배열합치기
var cityArray2 = ['광주','대전','울산'];
var totalArray = cityArray.concat(cityArray2);
console.log(totalArray);

//reverse()배열순서 뒤집기
totalArray.reverse();
console.log(totalArray);

//join() - 배열을 문자열로 만들기
var everything = [1, 'hello', function(){}, {'name':'flynn'}, new Date()];
console.log(everything.join(' - '));

//slice() - 배열 일부 반환
var slicedArray = totalArray.slice(1, 3);
console.log(slicedArray);

//splice() -  배열요소 추가, 삭제, 교체
console.log(totalArray);

//삭제
totalArray.splice(2, 3);
console.log(totalArray);

//추가
totalArray.splice(2, 0,'세종','성남');
console.log(totalArray);

//교체
totalArray.splice(1,2,'천안','안산');
console.log(totalArray);

//sort() - 정렬
//오름차순 : 숫자(0, 1, 2, ...100) 문자[apple, banana, coconut]
//내림차순 : 반대
totalArray.sort();
console.log(totalArray);

//내림차순으로 정렬하려면 compare함수를 정의해서 파리미터로 넣어줍니다.
var compare = function(a, b){
  if (a > b) return -1;
  if (b > a) return 1;
  return 0;
}

totalArray.sort(compare);
console.log(totalArray);

//숫자정렬
var numberArray = [11, 3, 23, 76, 9, 100];
console.log(numberArray.sort());
//sort()함수는 배열의 내용이 숫자이더라도 문자로 캐스팅을 해서 정렬을 한다.
//따라서 compare함수를 통해 문자화된 숫자를 다시 숫자로 캐스팅하자.
console.log(numberArray.sort(function(a, b){
  return a-b;
}));

//내림차순은
console.log(numberArray.sort(function(a, b){
  return b-a;
}));

//indexOf() - 해당 요소의 인덱스를 출력, 없으면 -1 출력
console.log(numberArray.indexOf(23));

//실습
//문제1)
//Array클래스의 함수들과 Math클래스의 random함수를 이용해서 로또번호 6자리를 생성해보자.
//가능하다면 중복이 안되게 해보자.
//중복가능
var lottoArray1 = new Array();
var lottoArray2 = new Array();
for(var i=0; i<6; i++){
  var lotto = Math.ceil((Math.random()*45));
  lottoArray1.push(lotto);
}

// //중복불가
for(var i=0; i<6; i++){
  var lotto = Math.ceil((Math.random()*45));
  if(lottoArray2.indexOf(lotto) == -1){
      lottoArray2.push(lotto);
  }else{
    i--;
  }
}

//문제2) 로또번호들을 내림차순으로 정렬하고 출력해보자.
lottoArray2.sort(function(a, b){return b-a});
console.log(lottoArray2.join(','));

for(var lotto of lottoArray2){
  console.log(lotto);
}
