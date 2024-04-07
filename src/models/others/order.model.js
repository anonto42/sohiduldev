import mongoose from 'mongoose';


const OrderSchema = new mongoose.Schema({
    prodcutId:{
        type:String,
        require:true
    },
    prodcutPrice:{
        type:String,
        require:true
    },
    prodcutTitle:{
        type:String,
        require:true
    },
    prodcutCat:{
        type:String,
        require:true
    },
    paid:{
        type:Boolean,
        default:false  
    },
    paidBy:{
        type:String,
        default:"none",
        enum:["bkash","rocket","nagad","upay","visaCard","msterCard","cellfin","mCash","payoneer"]
    },
    sellerId:{
        type:String,
        require:true
    },
    buyerId:{
        type:String,
        require:true
    },
    CustomOrder:{
        type:Boolean,
        default:false
    }
},{timestamps:true});


export const order = mongoose.model("order",OrderSchema);