const express = require("express");
const route = express.Router();



route.get("/location",(req,res)=>{
    res.send("Product location page");
})

route.get("/sales",(req,res)=>{
    res.send(" product sales page");
})

route.get("/stock",(req,res)=>{
    res.send(" product stockpage");
})

route.get("/price",(req,res)=>{
    res.send("product price page");
})

module.exports = route;