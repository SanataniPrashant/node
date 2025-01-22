const express = require("express");
const app =express();
const StuRoute = require("./routes/studentsRoute");

app.set("view engine","ejs");

app.use("/students", StuRoute);

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})