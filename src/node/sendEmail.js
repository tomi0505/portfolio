const server = require('http');
// const ip = require('ip');
//
// console.log(ip.address());

server.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type':'text/plain'});

  const url = request.url;

  response.end(`Siemaneczko!! ${url}`);

}).listen(8001);


console.log("go!!");