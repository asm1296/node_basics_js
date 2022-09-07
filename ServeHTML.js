const http = require('http');
const fs = require('fs');

const newServer = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    let readStream = fs.createReadStream(__dirname+'/HelloWorld.html','utf-8');
    readStream.pipe(res);
})

newServer.listen(3000,()=>{
    console.log(`Listening at Port 3000`);
})