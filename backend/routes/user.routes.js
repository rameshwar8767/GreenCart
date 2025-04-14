import { isAuth, loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import { Router } from "express";
import authUser from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/is-auth',authUser, isAuth)
userRouter.get('/logout', authUser, logoutUser)


export default userRouter