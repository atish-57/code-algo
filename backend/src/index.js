import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})
import connectDB from './db/index.js';
import {app} from "./app.js"

const port  = process.env.port || 8000

app.get('/',(req,res)=>{
    res.send('hello')
})

connectDB()
.then(() => {
    app.listen(port || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.port}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})