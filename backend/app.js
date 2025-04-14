import dotenv from "dotenv"
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './configs/db.js';
import userRouter from "./routes/user.routes.js";
import sellerRouter from "./routes/seller.routes.js";

dotenv.config({
    path:'./.env'
})




const app = express();

const port = process.env.PORT || 3001;

await connectDB()
.then(()=>{
    app.on("error", ()=>{
        console.log("ERROR:", error);
        throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed !!!", error);
    
})


//allow multiple origins
const allowedOrigins = ['http://localhost:5173'];

// Middleware to parse JSON requests

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}))


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})