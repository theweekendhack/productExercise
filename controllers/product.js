import { query } from "express";
import productModel from "../models/product.js";

export const getAProduct=async(req,res)=>{

    const productID = req.params.id;

    try{
        const product = await productModel.findById(productID);

        if(product)
        {
            res.status(200).json({
                message :`Product with ID : ${productID}`,
                body : product
            });
        }
        else
        {
            res.status(400).json({
                message :`No product found with the product id ${productID}`
            });
        }
    }
    catch(err)
    {
       
        if(err.name.includes("CastError"))
        {
            res.status(400).json({
                message :`No product found with the product id ${productID}`
            }); 
        }
        else
        {
            res.status(500).json({
                message :`Error ${err}`
            });
        }

    }
   
    
};


export  const  getAllProducts= async(req,res)=>{

    let pageNo = parseInt(req.query.pageNo);
    let limitNo = parseInt(req.query.limitNo);

    if(!pageNo)
    {
        pageNo=1;
    }

    if(!limitNo)
    {
        limitNo=10;
    }

    
    const skipValue = (pageNo-1) * limitNo;

    try
    {
        const products = await productModel.find().skip(skipValue).limit(limitNo);

        if(products)
        {

            productModel.estimatedDocumentCount(query).exec((err,count)=>{

                if(err)
                {
                    console.log(`Error ${err}`);
                }
                else
                {
                    res.status(200).json({
                        message :`Product list at page ${pageNo}`,
                        body  : products,
                        totalDocuments : count,
                        pageNo,
                        pageSize:products.length
            
                    });
                }

            })
    

        }
        else
        {
            res.status(400).json({
                message :`No products found at page ${pageNo}`
    
            });
        }

        
    }
    catch(err)
    {
        res.status(500).json({
            message :`Error ${err}`
        });
    }
  


   
};


export const addProduct= async (req,res)=>{

    const product = {
    
        id : req.body.id,
        title : req.body.title,
        description : req.body.description,
        unitPrice : req.body.unitPrice,
        costPrice : req.body.costPrice,
        quantity : req.body.quantity,
        minLevel : req.body.minLevel,
        maxLevel : req.body.maxLevel,
        category : req.body.category,
        features : req.body.features
    }

    const newProduct = new productModel(product);

    try
    {
       const  p =  await  newProduct.save();

        res.status(200).json({
            message :"Your Product Was added successfully",
            body:p
        });

    }
    catch(err)
    {
        res.status(500).json({
            message :`Error ${err}`
        });
    }
  
};

export  const updateProduct=async(req,res)=>{

    const productID = req.params.id;

    const newProduct = req.body;

    console.log(newProduct);

    try{
        const product = await productModel.findByIdAndUpdate(productID,newProduct)

        if(product)
        {
            res.status(200).json({
                message :`Product was successfully updated`,
                body : product
            });
        }
        else
        {
            res.status(400).json({
                message :`No product found with the product id ${productID}`
            });
        }
    }
    catch(err)
    {
       
        if(err.name.includes("CastError"))
        {
            res.status(400).json({
                message :`No product found with the product id ${productID}`
            }); 
        }
        else
        {
            res.status(500).json({
                message :`Error ${err}`
            });
        }

    }
};


 export const deleteProduct= async(req,res)=>{

    const productID = req.params.id;

    try{
        const product = await productModel.findByIdAndDelete(productID)

        if(product)
        {
            res.status(200).json({
                message :`Product was successfully deleted`,
                body : product
            });
        }
        else
        {
            res.status(400).json({
                message :`No product found with the product id ${productID}`
            });
        }
    }
    catch(err)
    {
       
        if(err.name.includes("CastError"))
        {
            res.status(400).json({
                message :`No product found with the product id ${productID}`
            }); 
        }
        else
        {
            res.status(500).json({
                message :`Error ${err}`
            });
        }

    }
};