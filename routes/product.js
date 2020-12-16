import express from "express";
const router = express.Router();

import {
        getAProduct,
        getAllProducts,
        addProduct,
        deleteProduct,
        updateProduct
    } from "../controllers/product.js";


// define the home page route
router.get('/:id',getAProduct);


router.get('/',getAllProducts);


router.post('/',addProduct);


router.put('/:id',updateProduct);


router.delete('/:id',deleteProduct);


export default router;