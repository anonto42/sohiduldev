import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"],
        trim:true,
    },
    description:{
        type:String,
        required:[true,"Description is required"],
        trim:true,
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        trim:true,
    },
    imgs:{
        img1:{
            type:String,
            required:[true,"All images are required"],
            trim:true,
        },
        img2:{
            type:String,
            required:[true,"All images are required"],
            trim:true,
        },
        img3:{
            type:String,
            required:[true,"All images are required"],
            trim:true,
        }
    },
    category:{
        type:String,
        required:[true,"Category is required"],
        trim:true,
    },
    brand:{
        type:String,
        required:[true,"Brand is required"],
        trim:true,
    },
    publishedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    reviews:{
        type:Array,
        required:[true,"Reviews are required"],
        trim:true,
    }
},{timestamps:true});

export const products = mongoose.model("products",productSchema)