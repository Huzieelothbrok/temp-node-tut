const fs = require('fs');
//async version
//when function completes then callbacks
fs.readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){return}
const first = result;
fs.readFile('./content/second.txt','utf-8',(err,result)=>{
    if(err){return}
    const second = result;
    fs.writeFile('./content/resultasync.txt','result by async fun',(err,result)=>{
        if(err){return}
        console.log(result)
        })
})   
})