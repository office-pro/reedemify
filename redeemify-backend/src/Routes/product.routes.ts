import express from 'express';
import { ProductController } from '../Controller/product.controller';
import { UploadData } from '../middleware/upload.middleware';

const productsRouter = express.Router();

productsRouter
// get Apis
.get('/', ProductController.getProducts)
.get('/getProductByProductId/:productId', ProductController.getProductById)
.get('/getProductCategories', ProductController.getProductCategory)
.get('/getProductSubCategories', ProductController.getProductSubCategories)
.get('/getProductImages', ProductController.getProductImages)

// post api's
.post('/createProductCategories', ProductController.createProductCategories)
.post('/createProductSubCategories', ProductController.createProductSubCategory)
.post('/create', ProductController.createProduct)
.post('/uploadImages', UploadData.upload.any(), ProductController.uploadImages)

// post cart apis

.post('/addToCart', ProductController.addToCart)
.post('/cart/delete', ProductController.deleteCartItems)
.get('/cart', ProductController.getCart)

// update api's
.put('/updateProductCategories', ProductController.createProductCategories)
.put('/updateProductSubCategories', ProductController.createProductSubCategory)
.put('/update', ProductController.createProduct)

// delete api's
.delete('/deleteProductSubCategories', ProductController.deleteProductSubCategories)
.delete('/deleteProductCategories', ProductController.deleteProductCategories)
.post('/deleteProducts', ProductController.deleteProducts)

export default productsRouter;