import express from 'express';
import { ProductController } from '../Controller/product.controller';


const productsRouter = express.Router();


productsRouter
.get('/', ProductController.getProducts)
// get Apis
.get('/getProductCategories', ProductController.getProductCategory)
.get('/getProductSubCategories', ProductController.getProductSubCategories)

// post api's
.post('/createProductCategories', ProductController.createProductCategories)
.post('/createProductSubCategories', ProductController.createProductSubCategory)

// update api's
.put('/updateProductCategories', ProductController.createProductCategories)
.put('/updateProductSubCategories', ProductController.createProductSubCategory)

// delete api's
.delete('/deleteProductSubCategories', ProductController.deleteProductSubCategories)


export default productsRouter;