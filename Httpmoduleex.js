const http = require('http');
const fs = require('fs');
const finalhandler = require('finalhandler');
const morgan = require('morgan');
const path = require('path');

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
var logger = morgan("combined",{ stream: accessLogStream });
const newServer = http.createServer((req,res)=>{
    if (req.url == '/'){
    var done = finalhandler(req, res)
 
  fs.readFile('Sample.txt', function (err, buf) {
      logger(req,res,(err)=>{
        if (err) return done(err)
        res.setHeader('Content-Type', 'text/plain')
        res.end(buf)
      })
    
  })
    }

    if (req.url == '/login'){
        var done = finalhandler(req,res);
        logger(req,res,(err)=>{
            if(err) return done(err);
        res.write('This is a Login Page');
        res.end();
        })
        
    }
})

newServer.listen(3000,()=>{
    console.log('Listening at Port 3000');
})