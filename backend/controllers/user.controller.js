import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {asyncHandler} from "../utils/asyncHandler.js";

// Register User : /api/user/register
export const registerUser = asyncHandler(async (req, res) => {
    try {
        const { name, email,  password } = req.body;

        if (!name ||!email ||!password) {
            return res.json({success:false, message:"All fields are required"});
        }
        const existedUser = await User.findOne({email});
        
        if (existedUser) {
            console.error("User already exists with email or username:", { email, username });
            throw new ApiError(409, "User with email  already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production"? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        
        return res.json({ success: true, message: "User registered successfully", user });

    } catch (error) {

        console.error("Error registering user:", error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
})

 
  
 
 

 
