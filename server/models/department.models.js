import mongoose from "mongoose";

const departSchema=new mongoose.Schema({
    departmentName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    createdBy:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"User"
    }
},
{
    timestamps:true
})
export const Department=mongoose.model("Department",departSchema)