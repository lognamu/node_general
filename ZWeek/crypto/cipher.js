const crypto = require('crypto');


var privateKey = 'private key';
var password = "1111";

var cipher = crypto.createCipher('aes192', privateKey);
cipher.update(password, 'utf8', 'base64');
var output = cipher.final('base64');
console.log(output);

var decipher = crypto.createDecipher('aes192', privateKey);
decipher.update(output, 'base64', 'utf8');
var origin = decipher.final('utf8');
console.log(origin);
