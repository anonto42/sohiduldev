import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Your username is required"],
        unique:[true,"Your username is not unique please choose a different username"],
        lowercase:[true,"Your username is not lowercase please choose a different lowercase username"],
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:[true,"Your email is required"],
        unique:[true,"Your email is not unique please choose a different email"],
        lowercase:[true,"Your email is not lowercase please choose a different lowercase email"],
        trim:true
    }
},{timestamps:true})