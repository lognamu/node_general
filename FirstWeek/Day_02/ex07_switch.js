var rls = require('readline-sync');

var grade  = rls.question("Enter grade (A ~ F) : ");
switch(grade){
  case 'A': console.log('당신의 성적은 A입니다.'); break;
  case 'B': console.log('당신의 성적은 B입니다.'); break;
  case 'C': console.log('당신의 성적은 C입니다.'); break;
  default: console.log('당신의 성적은 F입니다.'); break;
}

//()안에있는 데이터와 case키워드 다음에 오는 데이터를 ===연산자로 비교해서 같으면 실행시킨다.
//default의 용도는 일치하는 case가 없는 경우에 실행되는 코드이다.

// ===연산자로 비교하기 때문에 type이 다르면 다른데이터로 판단한다.
console.log('--------------------------------------');
var code  = rls.question("Enter code (1 ~ 5) : ");
switch(code){
  case 1: console.log('당신의 성적은 A입니다.'); break;
  case 2: console.log('당신의 성적은 B입니다.'); break;
  case 3: console.log('당신의 성적은 C입니다.'); break;
  default: console.log('당신의 성적은 F입니다.'); break;
}

//각 case마다 break를 걸지 않으면 break키워드를 만날때 까지 실행된다.
console.log('--------------------------------------');
var code  = 2;
switch(code){
  case 1: console.log('당신의 성적은 A입니다.');
  case 2: console.log('당신의 성적은 B입니다.');
  case 3: console.log('당신의 성적은 C입니다.');
  default: console.log('당신의 성적은 F입니다.'); break;
}
