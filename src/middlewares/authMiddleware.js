
import { users } from './../models/Docs/user.model.js';
import  jwt from 'jsonwebtoken';



const authMiddleware = async (req, res, next) =>{
    let token;
    if (req.headers?.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1];
        try {
            if(token){
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const user = await users.findById(decoded?.id)
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Not Authorized token expired, Please login again");
        }
    }else{
        throw new Error('There are no token attached to header');
    }
}

const isAdmin = async (req, res, next) => {
    const {email} = req.user;
    const adminUser = await users.findOne({email});
    if (adminUser.role !== "admin") {
        throw new Error('you are not an admin');
    }else{
        next();
    }
}

export {authMiddleware,isAdmin};