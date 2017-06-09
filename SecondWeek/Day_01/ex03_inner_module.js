//모듈을 현재 프로그램에서 사용하려면 불러오는 과정이 필요합니다.
const os = require('os');
//console.log(os.cpus());
console.log(os.type());
//window_nt는 윈도우 xp, 7, 비스타, 8, 10모두를 아우르는 개념이다.

console.log(os.release());
console.log(os.arch());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.networkInterfaces());

console.log('----------');
const url = require('url');

var urlString = 'http://192.168.0.33:3000/bbs/list?id=13';
var parseObject = url.parse(urlString);
console.log(parseObject);

//브라우저가 요청한 url을 알면 그 url을 통해서 다양한 정보를 추출할 수 있다.
//특히 웹개발자와 밀접한 정보는 pathname과 query이다.

//pathname은 사용자의 요청 그자체이다.
console.log(parseObject.pathname);

//query는 사용자가 요청할 때 서버로 보내는 데이터이다.
console.log(parseObject.query);
