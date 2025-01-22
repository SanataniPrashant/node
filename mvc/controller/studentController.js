const express = require("express");
const route = express.Router();

const homePage = (req,res)=>{
    res.send("students homePage");
}
const  aboutPage= (req,res)=>{
    res.send("students aboutPage");
}
const coursesPage = (req,res)=>{
    res.send("students coursesPage");
}
const ourfessPage = (req,res)=>{
    res.send("students ourfessPage");
}

module.exports ={
    homePage,
    aboutPage,
    coursesPage,
    ourfessPage
}