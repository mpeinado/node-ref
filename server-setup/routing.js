var http = require('http');
const port = 3000;

var fs = require('fs');


var server = http.createServer(function(req, res){
    console.log('Request was made ' + req.url);

    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if(req.url === '/api/ninjas'){
        var userObj = {
            name: 'marco',
            job: 'Software Engineer'
        };

        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(userObj));
    }else{
        res.writeHead(404, {'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(port, '127.0.0.1');
console.log(`Listening to port ${port}`);