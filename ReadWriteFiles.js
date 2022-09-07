var fs = require('fs');

fs.readFile('Sample.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
    fs.mkdir('ExFolder',(error)=>{
        if(error) throw error;
        fs.writeFile('./ExFolder/AnotherSample.txt',data,(err)=>{
            if(err) throw err;
            fs.writeFile('./ExFolder/simple.txt','Another file for practice',(erro,dat)=>{
                if(erro) throw erro;
            })
        })
    })
})
    
   


