var fs = require("fs");
var http = require("http");

var filename = __dirname + '/public/index.html';

/*
//part 1 a
var data = fs.readFileSync(filename, 'utf8');
*/

//part 1 b
/*var data = fs.readFile(filename, "utf8", function(error, data){

    var server = http.createServer(function(request, resp){
	resp.writeHead(200, {"Content-type":"text/html"});
	resp.write(data);
	resp.end();
    }).listen(8080,'0.0.0.0');
});
*/

//server.listen(8080, '0.0.0.0');

console.log("Server listening");


fs.stat(filename, function(err, stats){
    fs.open(filename, "r", function(err, fd){
        var buffer = new Buffer(stats.size);

        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer){
            var data = buffer.toString("utf8", 0, buffer.length);
            
	    var server = http.createServer(function(request, resp){
		resp.writeHead(200, {"Content-type":"text/html"});
		resp.write(data);
		resp.end();
	    }).listen(8080,'0.0.0.0');
            fs.close(fd);

        });
    });
});
