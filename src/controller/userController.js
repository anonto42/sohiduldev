import { generateToken } from "../config/jwtToken.js";
import { users } from "../models/Docs/user.model.js";
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
        throw new Error("Something was wrong")
    }
};

const getUser = async (req,res)=>{
    try {
        const getUser = await users.find();
        res.json(getUser);
    } catch (error) {
        throw new Error(error);
    } 
};

const getAUser = async (req, res) => {};

// const getUser = '';

export { createUser ,loginUser ,getUser , getAUser};