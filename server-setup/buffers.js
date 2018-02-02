// Buffers
// Temp storage for a chunk of data that is being transferred
// Buffer is filled with data, and then passsed along
// Transfer small chunks of data at a time

// Streams
// Stream of data that flllows from one place to another 
// Increase performance 
// Writable streams - write data
// Readable streams - read data from a stream
// Duple - read and write to a stream
var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function(chunk){
    console.log('new chunk received');
    //console.log(chunk);
    myWriteStream.write(chunk);
});

