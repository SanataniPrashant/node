

const homePage = (req,res)=>{
    res.render("home");
}
const  aboutPage= (req,res)=>{
    res.render("about");
}
const coursesPage = (req,res)=>{
    res.render("courses");
}
const ourfessPage = (req,res)=>{
    res.render("fees");
}

module.exports ={
    homePage,
    aboutPage,
    coursesPage,
    ourfessPage
}