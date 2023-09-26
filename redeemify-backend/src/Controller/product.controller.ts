import {Request, Response} from 'express'
import * as models from '../models/index';
import * as AWS from 'aws-sdk';

// Configure AWS SDK with your credentials and region
AWS.config.update({
  accessKeyId: 'V3R1SE0BJR7T0C4339D0',
  secretAccessKey: '1IiMUCZFogOdVeD1bhZmJKkENVCKE8KURFwb8xex',
  region: 'us-east-1',
  s3ForcePathStyle: true, 
});


export class ProductController {
   
  
  static async createProduct(req: Request, res: Response) {
    console.log("body - ",req.body);
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

   const s3 = new AWS.S3({
      endpoint: 'del1.vultrobjects.com'
   });

   s3.createBucket({ Bucket: "test-shashi-bucket" }, (err, data) => {
      if (err) {
         console.error('Error creating bucket:', err);
      } else {
         console.log('Bucket created successfully:', data.Location);
      }
   });
   
    console.log("body - ",req.body.productImageName);
     console.log("files - ",req.files);
     res.json({message: "uploaded image"});
  }

}