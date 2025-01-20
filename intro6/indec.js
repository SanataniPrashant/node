const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("<h1>Hello World </h1>");
})

app.get("/home",(req,res)=>{
    res.send("<h1>this is my home</h1>");
})

app.post("/datasave",(req,res)=>{
    res.send("Data saved");
})

app.listen(8000,()=>{
    console.log("server is running on port 8000");
})