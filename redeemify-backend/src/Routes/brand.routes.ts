
import express, {Request, Response} from 'express';
import { UserController } from '../Controller/user.controller';
import { BrandController } from '../Controller/brand.controller';
import { UploadData } from '../middleware/upload.middleware';

const brandRouter = express.Router();

brandRouter
.get('/', BrandController.getBrands)
.get('/:brandId', BrandController.getBrandByBrandId)
.get('/:brandId/products',  BrandController.getActiveBrandProducts)
.post('/createBrand', BrandController.createBrand)
.post('/createBrands',UploadData.upload.any(), BrandController.createBrands)

export default brandRouter;



