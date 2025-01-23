
const studentModel = require("../model/studentModel");


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
const studentsave = async (req,res)=>{
    const {name,email,city,phone} = req.body;

    const data = await studentModel.create({
        name:name,
        email:email,
        city:city,
        phone:phone
    })
    res.render("contact");
}


module.exports ={
    home,
    about,
    courses,
    contact,
    studentsave
}