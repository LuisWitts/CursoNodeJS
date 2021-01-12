var http = require ("http");

http.createServer(function(req, res){
    res.end("ANNALUA");

}).listen(8081);

console.log("SERVER A TODO VAPOR");