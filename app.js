const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Page</title>
    </head>
    <body>
      <h1>Silence is golden.</h1>
      <p>Welcome to my page!</p>
    </body>
    </html>
  `);
  res.end();
}).listen(3001);

console.log("Server started on port 3001");