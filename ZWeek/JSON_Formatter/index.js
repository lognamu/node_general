var http = require('http');
var output = [];
for(var i=0; i<100; i++){
  output.push({
    key:'key_'+i,
    value:Math.random()
  });
}

http.createServer(function(request, response){
  response.writeHead(200,{'Content-Type': 'application/json'});
  response.end(JSON.stringify(output));
}).listen(3000, function(){
  console.log('server running at http://127.0.0.1:3000');
});
