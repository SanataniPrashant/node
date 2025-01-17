const http = require("http");
const student = require("./bhopal.js");
http.createServer(function(req,res){
    res.write("<h1>this is my first program !!!!</h1>");
    res.write(student.myName());
    res.write(student.myCity());
    res.write(student.myFees());
    res.end("server response ending !!!!");
}).listen(8020, ()=>{
    console.log("server is running on port 8020");
});