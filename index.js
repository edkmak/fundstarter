var fs = require("fs");
var filename = 'public/index.html';
var data = fs.readFileSync(filename);

function start(resp){
    resp.writeHead(200, {"Content-type":"text/html"});
    resp.write(data);
    resp.end();
}

exports.start = start;
