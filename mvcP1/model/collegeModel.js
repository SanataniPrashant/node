
const mongoose = require("mongoose");
const contactSchema  = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
    phone: String,
});


module.exports = mongoose.model("contact",contactSchema);
