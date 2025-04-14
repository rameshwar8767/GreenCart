import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    cartItems: {
        type: Object,
        required: true,
        default: {},
    },
}, {
    timestamps: true,
    minimize: false,
});




const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;

