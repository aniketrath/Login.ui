const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique: true,
        required: true,
    },
    name:{
        type: String,
    },
    username:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    position:{
        type: String,
    }
},{ timestamps: true })

const user = mongoose.model('users', userSchema);

module.exports = user;