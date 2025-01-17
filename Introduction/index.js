const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>This is my home page !!! </h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>This is my About page !!! </h1>");
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})
