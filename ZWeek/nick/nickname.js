var alphabet = ['a','b','c','d','e','f','g','h','i','j'
,'k','l','m','n','o','p','q','r','s','t','u',
'v','w','x','y','z'];
var nickArr = [];
for(var i=0; i<7; i++){
  nickArr.push(alphabet[parseInt(Math.random()*26)]);
}
console.log(nickArr);
