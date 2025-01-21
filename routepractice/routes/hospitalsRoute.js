const express = require("express");
const route = express.Router();



route.get("/home",(req,res)=>{
    res.send("hospital home page");
})

route.get("/patient",(req,res)=>{
    res.send("hospital patient page");
})

route.get("/admit",(req,res)=>{
    res.send("hospital admit page");
})

route.get("/save",(req,res)=>{
    res.send("hospital save page");
})

module.exports = route;