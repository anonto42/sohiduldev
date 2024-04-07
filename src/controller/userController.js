import { generateToken } from "../config/jwtToken.js";
import { users } from "../models/Docs/user.model.js";
// create user
const createUser = async (req,res) =>{
    const userEmail = req.body.email;
    const findUser = await users.findOne({email:userEmail});
    if(!findUser){
        const newUser = await users.create(req.body);
        res.json(newUser);
    }else{
        throw new Error('User already exists')
    };
};
// login user
const loginUser = async (req,res)=>{
    const {email,password} = req.body;
    // check if user already exists or not
    const findUser = await users.findOne({email});
    if(findUser && (await findUser.isPasswordMatch(password))){
        res.json({
            _id: findUser?._id,
            firstName: findUser?.firstName,
            lastName: findUser?.lastName,
            email: findUser?.email,
            number: findUser?.number,
            token:generateToken(findUser?._id)
        });
    }else{
        throw new Error("Something was wrong in login")
    }
};
// get all users
const getUser = async (req,res)=>{
    try {
        const getUser = await users.find();
        res.json(getUser);
    } catch (error) {
        throw new Error(error);
    } 
};
// get a single user
const getAUser = async (req, res) => {
    const { id } = req.params;
    try {
        const getaUser = await users.findById(id);
        res.json({
            getaUser
        });
    } catch (error) {
        throw new Error(error);
    }
};
// delet user
const deletUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletUser = await users.findByIdAndDelete(id);
        res.json({
            deletUser
        });
    } catch (error) {
        throw new Error(error);
    }
};
// update user
const updateUser = async (req, res) => {
    const { _id } = req.user;
    try {
    const updatedUser = await users.findByIdAndUpdate(_id,{
        firstName:req?.body?.firstName,
        lastName:req?.body?.lastName,
        email:req?.body?.email,
        number:req?.body?.number
    },{
        new:true
    });
    res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
};
// block user
const blockUser = async (req,res)=>{
    const { id } = req.params;
    try {
        const block = await users.findByIdAndUpdate(id,
        {
            isBlocked:true
        },
        {
            new:true
        });
        res.json(block);
    } catch (error) {
        throw new Error(error)
    }
}
// unblock user
const unblockUser = async(req,res)=>{
    const { id } = req.params;
    try {
        const unblock = await users.findByIdAndUpdate(id,
        {
            isBlocked:false
        },
        {
            new:true
        });
        res.json(unblock)
    } catch (error) {
        throw new Error(error)
    }
}

export { createUser ,loginUser ,getUser , getAUser, deletUser,updateUser,blockUser,unblockUser};