const express = require("express");
const app = express();

const mongoose = require("mongoose");

const collegeRoute = require("./routes/collegeRoutes")

mongoose.connect("mongodb://127.0.0.1:27017");

app.set("view engine","ejs");
app.use("/college",collegeRoute);



app.listen(8000,()=>{
    console.log("server is running on port 8000");
})

//npm i mongoose