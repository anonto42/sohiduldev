import mongoose from 'mongoose';


const conversationSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    sellerId:{
        type:String,
        required:true
    },
    buyerId:{
        type:String,
        required:true
    },
    readBySeller:{
        type:Boolean,
        default:false
    },
    readByBuyer:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

export const conversation = mongoose.model("conversation",conversationSchema)