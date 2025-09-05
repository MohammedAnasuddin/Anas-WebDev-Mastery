const http = require("node:http")

const server = http.createServer(function(req, res) {
    if(req.url = "/path1"){
         res.end("on path one")
    }

    res.end("Hello World")
});

server.listen(5124);