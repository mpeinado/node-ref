// Pipes
// Take data from a read stream and pipe it to a write stream
// No manually listen from read stream and write to write stream
var http = require('http');
const port = 3000;

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// pipe only on readable streams
//myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req, res){
    console.log('Request was made ' + req.url);

    // this code bloack is triggered each time a request is fired
    // Response Headers - extra information 
    //  Content-type
    //  Status
    res.writeHead(200, {'Content-type': 'text/plain'});
    myReadStream.pipe(res);
});

server.listen(port, '127.0.0.1');
console.log(`Listening to port ${port}`);