const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
  fs.readFile(path.join(__dirname, 'index.html'), function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end("Error loading page");
      return;
    }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
  });
}).listen(3001);

console.log("Server started on port 3001");