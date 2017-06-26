const crypto = require('crypto');

var password = '1111';

var hash = crypto.createHash('sha1');
hash.update(password);
var output = hash.digest('hex');
console.log(output);
