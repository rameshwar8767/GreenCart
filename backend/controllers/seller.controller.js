import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";

// Login Seller : /api/seller/login

export const loginSeller = asyncHandler(async (req, res) => {
    try {
        const { email,  password } = req.body;

      
        if (!email && !password) {
            return res.status(400).json({ success: false, message: "Email or password is required" });  
        }
      
        if (email !== process.env.SELLER_EMAIL || password !== process.env.SELLER_PASSWORD) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.cookie("sellerToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.json({ success: true, message: "Seller logged in successfully" });

    } catch (error) {
        console.error("Error in loginSeller", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}
);

// Seller isAuth : /api/seller/is-auth

export const isSellerAuth = asyncHandler(async (req, res) => {
    try {

        return res.json({ success: true});
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error" });
    }
})

// Logout Seller : /api/seller/logout

export const logoutSeller = asyncHandler(async (req, res) => {
    try {
        res.clearCookie("sellerToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production"? "none" : "strict",
        });
        return res.json({ success: true, message: "User logged out successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error" });
    }
});
