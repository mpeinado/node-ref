var fs = require('fs');// core module

// -----> Sync
// read file
//var readMe = fs.readFileSync('readme.txt', 'utf8');//looking flow of code
//console.log(readMe);
// write to file
//fs.writeFileSync('write.txt', readMe);

// -----> Async 
// this is not blocking the code
fs.readFile('readme.txt', 'utf8', function(error, data){
    console.log(data);

    fs.writeFile('writeMe.txt', data);
});

console.log('test');