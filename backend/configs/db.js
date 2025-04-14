import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const dbUri = process.env.MONGODB_URI?.endsWith("/")
            ? `${process.env.MONGODB_URI}`
            : `${process.env.MONGODB_URI}`;

        const connectionInstance = await mongoose.connect(dbUri);

        console.log(`✅ MongoDB connected | Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;
