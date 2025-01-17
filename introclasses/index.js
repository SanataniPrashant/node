const http = require("http");
const college = require("./cybrom.js");
http.createServer(function(req,res){
    res.write("<h1>this is my first program !!!!</h1>");
    res.write(college.Mycollege());
    res.end("server response ending !!!!");
}).listen(8080, ()=>{
    console.log("server is running on port 8080");
});