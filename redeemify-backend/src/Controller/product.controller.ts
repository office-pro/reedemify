import {Request, Response} from 'express'
import * as models from '../models/index';
import { ImageResizerHelper } from '../utils/image-resizer-helper';
import { S3StorageUploader } from '../object-storage-models/s3StorageUploader.model';

export class ProductController {
   
  
  static async createProduct(req: Request, res: Response) {
    (models?.default as any)?.["product"].createProduct(req?.body)
                                      .then((data: any) => {
                                         res.json({"message": "data added sucessfully"})
                                      });
  }

  static async createProductCategories(req: Request, res: Response) {
     (models?.default as any)?.["productCategory"].createProductCategories(req.body)
                                      .then((data: any) => {
                                         res.json({"message": "data added sucessfully"})
                                      });
  }

  static async createProductSubCategory(req: Request, res: Response) {
    (models?.default as any)?.["productSubCategory"].createProductSubCategories(req?.body)
                                      .then((data: any) => {
                                         res.json({"message": "data added sucessfully"})
                                      });
  }


  static async getProductCategory(req: Request, res: Response) {
    (models?.default as any)?.["productCategory"].getProductCategories()
                                       .then((data: any) => {
                                        res.json(data)
                                      });
  }

  static async getProducts(req: Request, res: Response) {
    (models?.default as any)?.["product"].getAllProducts()
                                       .then((data: any) => {
                                        res.json(data)
                                      });                                               

  }

  static async getProductSubCategories(req: Request, res: Response) {
    (models?.default as any)?.["productSubCategory"].getAllProductSubCategories()
                                      .then((data: any) => {
                                         res.json(data)
                                      });
  }

  static async deleteProductSubCategories(req: Request, res: Response) {
    (models?.default as any)?.["productSubCategory"].deleteProductSubCategories(req.body)
                                      .then((data: any) => {
                                         res.json(data)
                                      });
  }

  static async deleteProductCategories(req: Request, res: Response) {
    (models?.default as any)?.["productCategory"].deleteProductCategories(req.body)
                                      .then((data: any) => {
                                         res.json(data)
                                      });
  }

   static async deleteProducts(req: Request, res: Response) {
      (models?.default as any)?.["product"].deleteProducts(req.body)
                                      .then((data: any) => {
                                         res.json(data)
                                      });
   }

   static async uploadImages(req: Request, res: Response) {
      let files: Array<any> = ImageResizerHelper.resizeImages(req.files as Array<any>);
      
      S3StorageUploader.uploadFiles(req,res,files).then((data:any) => {

         let obj = {
            productImagesName: req?.body?.productImageName,
            imageUrls: data
         };

         (models?.default as any)?.["productImagesUrlContainer"]
                                  .createProductImagesUrlContainer([obj])
                                  .then((data: any) => {
                                     res.json(obj)
                                  });

      })
   }

}