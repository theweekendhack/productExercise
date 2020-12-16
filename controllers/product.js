
export const getAProduct=(req,res)=>{

    const productID = req.params.id;

    console.log(`${productID}`);
    
};


export  const  getAllProducts=(req,res)=>{

    let pageNo = req.query.pageNo;

    if(!pageNo)
    {
        pageNo=1;
    }


    console.log(`All Products. Page No ${pageNo}`);
};


export const addProduct=(req,res)=>{

    const product = {
    
        id : req.body.id,
        title : req.body.title,
        description : req.body.description,
        unitPrice : req.body.unitPrice,
        costPrice : req.body.costPrice,
        quantity : req.body.quantity,
        minLevel : req.body.minLevel,
        maxLevel : req.body.maxLevel,
        category : req.body.category
    }

    console.log(product);
};

export  const updateProduct=(req,res)=>{

    console.log(`Update Product`);
};


 export const deleteProduct=(req,res)=>{

    console.log(`Delete Product`);
};