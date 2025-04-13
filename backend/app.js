import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();

const port = process.env.PORT || 3001;

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})