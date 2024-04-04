import express from "express"
import {blockUser, createUser, deletUser, getAUser, getUser, loginUser, unblockUser, updateUser } from "../controller/userController.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();


router.post('/register',createUser);
router.post('/login',loginUser);
router.get('/all-users',getUser);
router.get('/:id',authMiddleware,isAdmin,getAUser);
router.delete('/:id',deletUser);
router.put('/edit-user',authMiddleware,updateUser);
router.put('/block-user/:id',authMiddleware,isAdmin,blockUser);
router.put('/unblock-user/:id',authMiddleware,isAdmin,unblockUser);


export default router;