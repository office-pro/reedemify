
import express, {Request, Response} from 'express';
import { UserController } from '../Controller/user.controller';
import { BrandController } from '../Controller/brand.controller';
import { UploadData } from '../middleware/upload.middleware';

const brandRouter = express.Router();

brandRouter
.get('/', BrandController.getBrands)
.get('/:brandId', BrandController.getBrandByBrandId)
.get('/:brandId/products',  BrandController.getActiveBrandProducts)
.get('/:brandId/banner',  BrandController.getBrandBanner)
.post('/createBrand', BrandController.createBrand)
.post('/createBrands',UploadData.upload.any(), BrandController.createBrands)
.post('/createBrandBanner',UploadData.upload.any(), BrandController.createBrandBanners)
.delete('/:bannerId/banner',  BrandController.deleteBrandBanner)
export default brandRouter;



