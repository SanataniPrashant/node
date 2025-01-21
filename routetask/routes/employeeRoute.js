const express = require("express");
const route = express.Router();



route.get("/home",(req,res)=>{
    res.send("employee home page");
})

route.get("/about",(req,res)=>{
    res.send("employee about page");
})

route.get("/dept",(req,res)=>{
    res.send("employee dept page");
})

route.get("/salary",(req,res)=>{
    res.send("employee salary page");
})

module.exports = route;