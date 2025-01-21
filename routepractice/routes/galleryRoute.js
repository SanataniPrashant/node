const express = require("express");
const route = express.Router();



route.get("/stugallery",(req,res)=>{
    res.send("stugallery page");
})

route.get("/companyimages",(req,res)=>{
    res.send("companyimages page");
})

route.get("/managerportfolio",(req,res)=>{
    res.send("managerportfolio page");
})

route.get("/productimages",(req,res)=>{
    res.send("productimages page");
})

module.exports = route;