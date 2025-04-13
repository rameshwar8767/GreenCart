import { loginUser, registerUser } from "../controllers/user.controller.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)


export default userRouter