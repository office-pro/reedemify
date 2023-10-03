import {Request, Response} from 'express'
import * as models from '../models/index';
import { FirebaseStorageModel } from '../object-storage-models/firebaseStorage.model';
// import { VultrModel } from '../object-storage-models/vultr.model';
// import { VultrResponseHelper } from '../utils/vultr-response-helpers';


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
     
   //   await VultrModel.getAllBuckets().then((response: any) => {
   //       console.log("json obj - ", JSON.stringify(response.data.object_storages));
   //       console.log("body - ",req.body.productImageName);
   //       console.log("files - ",req.files);
   //       res.json({message: VultrResponseHelper.getObjectStorage(response.data.object_storages)});
   //   })

   await FirebaseStorageModel.uploadFiles(req.files as Array<any>,req.body.productImageName)
                              .then((data:any) => {
                                console.log("data - ", JSON.stringify(data))
                              })
                              .finally(() => {
                                 res.json({message: "hello world"});
                              })

   // console.log("body - ",req.body.productImageName);
   // console.log("files - ",req.files);
   // res.json({message: "hello world"});
  }

}