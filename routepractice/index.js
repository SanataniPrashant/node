const express = require("express");
const app =express();
const hospitalsRoute = require("./routes/hospitalsRoute");
const galleryRoute = require("./routes/galleryRoute");

app.use("/hospitals",hospitalsRoute );
app.use("/gallery", galleryRoute);

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})