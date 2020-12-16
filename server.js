import express from "express";
import productRoutes from "./routes/product.js";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from "dotenv";


//creation of the express app object
const app = express();


dotenv.config({path:"config/keys.env"});

//cors middleware
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

// parse application/json
app.use(express.json());


//map product router to app
app.use("/products",productRoutes);


app.listen(process.env,()=>{
    console.log(`Web Server is up and running`)
})