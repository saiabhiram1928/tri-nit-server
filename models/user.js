const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    userId : {
        type: String,
        required :true
    },
    email:{
        type : String,
        required: true
    },
    role:{
        type: String,
        required: true
    }

})
const UserModel= mongoose.model("users" , UserSchema , "User")

module.exports = UserModel