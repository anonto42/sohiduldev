import mongoose from 'mongoose';


const ReviewsSchema = new mongoose.Schema({
    prodcutId:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true  
    },
    starNumber:{
        type:Number,
        require:true,
        enum:[1,2,3,4,5]
    },
    desc:{
        type:String,
        require:true  
    }
},{timestamps:true});


export const review = mongoose.model("review",ReviewsSchema);