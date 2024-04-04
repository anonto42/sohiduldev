import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Your First is required"],
        trim:true,
    },
    lastName:{
        type:String,
        required:[true,"Your last is required"],
        trim:true,
    },
    email:{
        type:String,
        required:[true,"Your email is required"],
        unique:[true,"Your email is not unique please choose a different email"],
        lowercase:[true,"Your email is not lowercase please choose a different lowercase email"],
        trim:true
    },
    number:{
        type:Number,
        required:[true,"Your Number is required"],
        unique:[true,"Your number is not unique please choose a different number"],
        trim:true,
    },
    password:{
        type:String,
        required:[true,"Your password is required"],
        minlength:[4,"Your password must be at least 4 characters long"],
        trim:true
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:'user'
    },
    cart:{
        type:Array,
        default:[]
    },
    address:[
        {
            type:mongoose.Schema.Types.ObjectId ,
            ref:"Adderss"
        }
    ],
    wishlist:[
        {
            type:mongoose.Schema.Types.ObjectId, 
            ref:"products"
        }
    ],
},{timestamps:true})

userSchema.pre('save', async function(next){
    const salt = bcrypt.genSaltSync(8);
    this.password = await bcrypt.hash(this.password,salt);
});

userSchema.methods.isPasswordMatch = async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password);
};

export const users = mongoose.model("users",userSchema);