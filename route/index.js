const express = require("express");
const app =express();
const StuRoute = require("./routes/studentRoute");

app.use("/students", StuRoute);

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})

