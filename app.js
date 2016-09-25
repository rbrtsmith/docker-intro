var http = require('http');

var port = 8000;

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello from my Node App \n Living inside a Docker container');
}).listen(port);
console.log('Server running at port ' + port + '/');
