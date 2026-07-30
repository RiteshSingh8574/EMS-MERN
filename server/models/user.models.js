import mongoose from "mongoose";
import validator from "validator";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        validate: {
        validator: function (value) {
            return validator.isEmail(value);
        },
        message: "Please enter a valid email address"
    }
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    role:{
        type:String,
        enum:["ADMIN","HR","EMPLOYEE"],
        default:"EMPLOYEE"
    }
},
 {
        timestamps:true
    },
)
export const User=mongoose.model("User",userSchema)