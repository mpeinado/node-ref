// Pipes
// Take data from a read stream and pipe it to a write stream
// No manually listen from read stream and write to write stream
var http = require('http');
const port = 3000;

var fs = require('fs');


var server = http.createServer(function(req, res){
    console.log('Request was made ' + req.url);

    var myObj = {
        name: 'Marco',
        job: 'Software Engineer'
    };
    // this code bloack is triggered each time a request is fired
    // Response Headers - extra information 
    //  Content-type
    //  Status
    res.writeHead(200, {'Content-type': 'application/json'});
   res.end(JSON.stringify(myObj));
});

server.listen(port, '127.0.0.1');
console.log(`Listening to port ${port}`);