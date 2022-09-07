const fs = require('fs');

var files = fs.readdirSync('ExFolder');
files.forEach(file=>{
    fs.unlinkSync('./ExFolder/'+file);
})

fs.rmdirSync('ExFolder');