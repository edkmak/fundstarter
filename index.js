var fs = require("fs");
var http = require("http");

var filename = __dirname + '/public/index.html';

var data = fs.readFileSync(filename, 'utf8');

var server = http.createServer(function(request, resp){
    resp.writeHead(200, {"Content-type":"text/html"});
    resp.write(data);
    resp.end();
});

server.listen(3000, '0.0.0.0');

console.log("Server listening");
