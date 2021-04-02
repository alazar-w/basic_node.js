const fs = require('fs');   
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname,'/test'),{}, function(err){
//     if(err) throw err;
//     console.log('Folder created...');

// })

//create and write to file ( writeFile -> overrides whatever is in there)
// fs.writeFile(path.join(__dirname,'/test','hello.txt'), 'Hello world!',err => {
//     if(err) throw err;
//     console.log('Folder written to...');

//     //File append
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'), ' i love apended text!',err => {
//         if(err) throw err;
//         console.log('Folder written to...');
    
//     });

// });

//Read File
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8', function(err,data){
//     if(err) throw err;
//     console.log(data);
// })

//Rename File
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','renamed.txt'), function(err,data){
    if(err) throw err;
    console.log('File renamed');

})



