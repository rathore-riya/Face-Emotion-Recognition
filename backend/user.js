const mongoose=require("mongoose")

const ContactSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
        },
    Phoneno:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Message:{
        type:String,
        required:true
    }
})
const User=mongoose.model('User',ContactSchema)

module.exports=User;