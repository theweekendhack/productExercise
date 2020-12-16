const express = require("express");
const productRoutes = require("./routes/product.js");
const cors = require('cors');
const bodyParser = require("body-parser");
require("dotenv").config({path:"config/keys.env"});


const app = express();

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