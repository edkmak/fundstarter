var fs = require("fs");
var filename = './fundstarter/public/index.html';
var data = fs.readFileSync(filename,'utf8');

function start(resp){
    resp.writeHead(200, {"Content-type":"text/html"});
    resp.write(data);
    resp.end();
}

exports.start = start;


console.log(data);
