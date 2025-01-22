
const studentModel = require("../model/studentModel")

const home = (req,res)=>{
    res.render('index');
}

const about = (req,res)=>{
    res.render('about');
}

const courses = (req,res)=>{
    res.render('courses');
}

const contact = (req,res)=>{
    res.render('contact');
}

module.exports ={
    home,
    about,
    courses,
    contact
}