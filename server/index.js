import dotenv from 'dotenv';
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from  './routes/users.js'
import mongoose from 'mongoose';

const app = express();
dotenv.config(); // Load environment variables from .env file 

app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the GOOGLE FORM API!');
})


// connected to mongodb
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`server is running on http://localhost:${process.env.PORT}`)
        })
    }).catch((error) => console.log(error))

mongoose.set('strictQuery', true)    
