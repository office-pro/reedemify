import {Request, Response} from 'express'
import * as models from '../models/index';
import {exec} from 'child_process';


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


      const listS3Buckets = () => {
         const command = 's3cmd ls';

         exec(command, (error, stdout, stderr) => {
            if (error) {
               console.error(`Error running 's3cmd ls': ${error.message}`);
               return;
            }

            if (stderr) {
               console.error(`s3cmd stderr: ${stderr}`);
               return;
            }

            // Parse the output to extract bucket names
            const bucketList = stdout
               .split('\n')
               .filter((line) => line.trim() !== '')
               .map((line) => line.trim().split(/\s+/).pop());

            // Print the list of bucket names
            console.log('List of S3 buckets:');
            console.log(bucketList);
         });
      };

      // Call the function to list S3 buckets
      listS3Buckets();


     console.log("body - ",req.body.productImageName);
     console.log("files - ",req.files);
     res.json({message: "uploaded image"});
  }

}