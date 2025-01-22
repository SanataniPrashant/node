const collegeModel = require("../model/collegeModel");


const homePage = (req,res)=>{
    res.render("index");
}
const  aboutPage= (req,res)=>{
    res.render("about");
}
const courses = (req,res)=>{
    res.render("courses");
}
const faculty = (req,res)=>{
    res.render("faculty");
}

const contactus = (req,res)=>{
    res.render("contact");
}

module.exports ={
    homePage,
    aboutPage,
    courses,
    faculty,
    contactus
}