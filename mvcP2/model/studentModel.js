const mongoose = require("mongoose");
const contactsSchema =  new mongoose.Schema({
    name: String,
    email: String,
    city: String,
    phone: String
});

module.exports = mongoose.model("vipin" , contactsSchema);