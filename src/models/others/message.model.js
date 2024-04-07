import mongoose from 'mongoose';


const messageSchema = new mongoose.Schema({
    conversationId:{
        type:String,
        required:true
    },
    userIdId:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true});

export const message = mongoose.model("message",messageSchema)