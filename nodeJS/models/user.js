const mongoose =require("mongoose");

const userSchema =new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    gender: {
        type: String,
        required: true
    },
}, {timestame:true}) //here timestame is function which automatically save the create &update time in db.

const User =mongoose.model("user",userSchema)

module.exports=User;