import express from "express";
import productRoutes from "./routes/product.js";
import cors from 'cors';
import dotenv from "dotenv";
import db from "./DAO/MongoDBDOA.js";
import swaggerUi  from 'swagger-ui-express';
import swagerJsDoc from 'swagger-jsdoc';


//creation of the express app object
const app = express();

dotenv.config({path:"config/keys.env"});

const options = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Product API',
        description: "API Information",
        version: '1.0.0',
      },
     
    },
    apis: ['./routes/*.js'],
  };
  
  const swaggerSpecification = swagerJsDoc(options);

  app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swaggerSpecification))

//cors middleware
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

// parse application/json
app.use(express.json());

//map product router to app
app.use("/products",productRoutes);

app.listen(process.env,()=>{
    
    console.log(`Web Server is up and running`);

    db.connect()
    .then(()=>{
        console.log(`Connected to DB`)
    })
    .catch(err=>console.log(`Cannot connect to db because ${err}`));
    
})