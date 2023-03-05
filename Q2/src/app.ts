import {connectDB} from './config/db';
import express,{Application, Request, Response} from 'express';
const app:Application = express();
import userRouter from './routes/user.route';
let port:number = 3000;

connectDB();

app.use(express.json());

app.use("/users",userRouter)


app.listen(port,()=>console.log(`express started on port ${port}`));