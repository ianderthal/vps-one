const http = require('http');

http.createServer(function (req, res) {
res.write("Silence is golden.");
res.end();


}
).listen(3001);

console.log("Server started on port 3001");
