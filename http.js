const http = require('http')

const server = http.createServer((req,res)=>{
   if(req.url=== '/'){
    res.end('welcome to homepage')
   }
   if(req.url=== '/about'){
    res.end('welcome to about')
   }
   else{ //else k bina nahi chalega kyun k do do ifs
   res.end(`
   <h1>OOPS!</h1`
   )
}
})
server.listen(5000)
console.log("Server is listening at port 5000")
//npm i <packagename> installs only in the current project
//npm install -g <packagename> installs globally
//npm init package.json if publish package give it a unique name