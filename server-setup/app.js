var http = require('http');

var server = http.createServer(function(req, res){
    console.log('Request was made ' + req.url);

    // this is triggered each time a request is fired
    // Response Headers
    //  Content-type
    //  Status
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hey');
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');