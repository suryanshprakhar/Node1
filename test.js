const http = require('http');
const port = 8060;
const server = http.createServer((req,res)=>{
    res.write("hello world"); //passing text/string data;

        res.write(JSON.stringify({name:"Prakhar"})); // Passing JSON data
    
        res.write('<h1>hello! This is html response</h1>')  //Passing html response
        
        res.end();
})

server.listen(port,()=>{
    console.log("started")
})





