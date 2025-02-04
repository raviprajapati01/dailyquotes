import express from 'express'
import cors from "cors";
import dotenv from 'dotenv'
import auotsRouts from "./routes/authRoutes.js";
import database from './config/database.js'

dotenv.config();

const port = process.env.PORT | 4000;
const app = express();

//add middelware
app.use(cors());
app.use(express.json());

// connection database
database();


app.use('/api/v1', auotsRouts);

app.get('/',(req,res)=>{
   res.send('this is a TeckPlement project');
})

app.listen(port, ()=>{
    console.log(`app is running port no ${port}`);
})