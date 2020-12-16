const express = require('express')
const router = express.Router();

const {
        getAProduct,
        getAllProducts,
        addProduct,
        deleteProduct,
        updateProduct
    } = require("../controllers/product.js");


// define the home page route
router.get('/:id',getAProduct);


router.get('/',getAllProducts);


router.post('/',addProduct);


router.put('/:id',updateProduct);


router.delete('/:id',deleteProduct);


module.exports = router;