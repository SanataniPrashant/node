const express = require("express");
const app = express();
const port = 9000;
app.get("/student/home",(req,res)=>{
    res.send("student home page");
})

app.get("/student/about",(req,res)=>{
    res.send("student about page");
})

app.get("/student/fees",(req,res)=>{
    res.send("paisa paisa");
})
app.get("/teacher/home",(req,res)=>{
    res.send("teacher home page");
})

app.get("/teacher/about",(req,res)=>{
    res.send("teacher about page");
})

app.get("/teacher/department",(req,res)=>{
    res.send("teacher department page");
})

app.listen(port,()=>{
    console.log(port);
})