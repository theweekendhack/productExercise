import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
const router = express.Router();

import {
        getAProduct,
        getAllProducts,
        addProduct,
        deleteProduct,
        updateProduct
    } from "../controllers/product.js";


// define the home page route

/**
 * @swagger
 * 
 * /products/{productID}/:
 *   get:
 *     summary : Retrieve  a product
 *     description: Retrieve  a product BY product ID
 *     produces:
 *      - application/json
 *     parameters:
 *       -  in: path
 *          name: productID
 *          default : 5fda1607a9025b5c201ab665
 *          schema:
 *             type: string
 *          required: true
 *          type: string,
 *              description :Numeric ID of the product to get
 *     responses:
 *       200:
 *         description: Successful operation. Product Found
 *       400:
 *         description : Invalid ID supplied
 *       404:
 *         description : Product not found
 *       500:
 *          description: Sever error 
 * 
 */
router.get('/:id',getAProduct);

/**
 * @swagger
 * 
 * /products/:
 *   get:
 *     description: Retrieve  a list of products
 *     summary: Retrive a list of products
 *     produces:
 *      - application/json
 *     parameters:
 *       -  in: query
 *          name: pageNo
 *          schema:
 *             type: integer
 *              description :This will indicate the pageNumber
 *              required:false
 *       -  in: query
 *          name: limitNo
 *          schema:
 *             type: integer
 *              description :This will indicate the number of products to return 
 *              required:false   
 *     responses:
 *       200:
 *         description: Product list at page ${pageNo}. Total number of products found ${products.length}
 *       404:
 *         description : No products found on page ${pageNo}
 *       500:
 *          description: Sever error 
 * 
 */
router.get('/',getAllProducts);
/**
 * @swagger
 * definitions:
 *  Product:
 *   type: object
 *   properties:
 *    title:
 *     type: string
 *     description: Title of Product
 *     example: 'Samsung Note Book 3'
 *    description:
 *     type: string
 *     description: Descripton of Product
 *     example: 'Lovely phone'
 *    unitPrice:
 *     type: number
 *     description: unit price of item
 *     example: 200
 *    costPrice:
 *     type: number
 *     description: cost price of item
 *     example: 20
 *    quantity:
 *     type: number
 *     description: Quantity on hand
 *     example: 100
 *    minLevel:
 *     type: number
 *     description: Minimum Level of Stock for products
 *     example: 5
  *    maxLevel:
 *     type: number
 *     description: Maxiumum Level of Stock for products
 *     example: 50
 *    features:
 *     type: array
 *     items:
 *      type : object
 *      properties:
 *       featureName:
 *          type: string
 *          description: name of the team
 *          example: 'weight'
 *       featureValue:
 *          type: string
 *          example: '50'
*/

/**
 * @swagger
 * 
 * /products/:
 *   post:
 *    summary : Creates a new product
 *    description: Creates a new product
 *    requestBody:
 *      content:
 *          application/json:
 *              schema:
 *               $ref: '#/definitions/Product'
 *    responses:
 *       200:
 *         description: Product Created Successfully
 *       404:
 *         description : No products found on page ${pageNo}
 *       500:
 *          description: Error occured when creating an product
 * 
 */
router.post('/',addProduct);

/**
 * @swagger
 * 
 * /products/{productID}:
 *   put:
 *    description: Update a product based on a ProductID
 *    parameters:
 *      - in : path
 *        name: productID
 *        default : 5fda1607a9025b5c201ab665
 *        schema:
 *         type : string
 *        required : true
 *    requestBody:
 *      content:
 *          application/json:
 *              schema:
 *               $ref: '#/definitions/Product'
 *    responses:
 *       200:
 *         description: Product Updated Successfully
 *       404:
 *         description : No products found with ID ${pageNo}
 *       400:
 *         description : Invalid Product ID
 *       500:
 *          description: Error occured when creating an product
 * 
 */

router.put('/:id',updateProduct);



/**
 * @swagger
 * 
 * /products/{productID}/:
 *   delete:
 *     summary : Delete a product based on a Product ID
 *     description: Delete a product based on a Product ID
 *     produces:
 *      - application/json
 *     parameters:
 *       -  in: path
 *          name: productID
 *          schema:
 *             type: string
 *          required: true
 *          type: string,
 *              description :Numeric ID of the product to get
 *     responses:
 *       200:
 *         description: Successful operation. Product Deleted
 *       400:
 *         description : Invalid ID supplied
 *       404:
 *         description : Product not found
 *       500:
 *          description: Sever error 
 * 
 */
router.delete('/:id',deleteProduct);


export default router;