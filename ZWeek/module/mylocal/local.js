//모듈을 만들기 전에 먼저 npm adduser를 해서 아이디를 생성하자
//모듈을 만든 뒤 npm publish로 npm에 등록하자(name이 겹치면 안됨)
//다시등록하려면 version이 겹치면 안되는데 덮어쓰고자 하면 npm publish --force로 강제로등록하자
//같이 

var local = function(){
  console.log('Local Module');
}
local.number = 52273;

exports = module.exports = local;
