
const studentModel = require("../model/studentModel");

const homePage = (req,res)=>{
    res.render('index');
}

const insertPage =(req,res)=>{
    res.render('insert');
}

const displayPage =(req,res)=>{
    res.render('display');
}

const studentsave = async (req,res)=>{
    const {name,email,city,phone} = req.body;
    const Data = await studentModel.create({
        name:name,
        email:email,
        city:city,
        phone:phone
    })
    res.render('insert');
}


module.exports={
    homePage,
    insertPage,
    displayPage,
    studentsave
}