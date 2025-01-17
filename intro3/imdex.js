const http = require("http");
const employee = require("./employee.js");
http.createServer(function(req,res){
    res.write("<h1>this is my first program !!!!</h1>");
    res.write(employee.employeeName());
    res.write(employee.employeessalary());
    res.write(employee.employeeexperience());
    res.end("server response ending !!!!");
}).listen(8020, ()=>{
    console.log("server is running on port 8020");
});