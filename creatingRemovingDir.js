// create and remove directories
var fs = require('fs');

//fs.unlink('test.txt');// remove 

// creating directories 
// ----> Sync
//fs.mkdirSync('stuff');// create directories
//fs.rmdir('stuff');

// -----> Aysnc non-locking
// fs.mkdir('stuff', function(){
//     console.log("Stuff directory was created")
// });// create directories

fs.rmdir('stuff');