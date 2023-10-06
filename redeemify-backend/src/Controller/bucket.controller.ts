import {Request, Response} from 'express'
import * as models from '../models/index';
// import { FirebaseStorageModel } from '../object-storage-models/firebaseStorage.model';
// import { VultrModel } from '../object-storage-models/vultr.model';
// import { VultrResponseHelper } from '../utils/vultr-response-helpers';


export class BucketController {
   
  
  static async getBucket(req: Request, res: Response) {
    (models?.default as any)?.["bucket"].getAllbuckets()
                                      .then((data: any) => {
                                         res.json(data)
                                      });
  }

  static async createBucket(req: Request, res: Response) {
    (models?.default as any)?.["bucket"].createbucket(req.body)
                                      .then((data: any) => {
                                         res.json(data)
                                      });
  }

  static async deleteBucket(req: Request, res: Response) {
    (models?.default as any)?.["bucket"].deletebuckets(req.body)
                                      .then((data: any) => {
                                         res.json(data)
                                      });
  }
  

  static async getAllBucketListProducts(req: Request, res: Response) {
   (models?.default as any)?.["bucketListProduct"].getAllbucketListProducts()
                                     .then((data: any) => {
                                        res.json(data)
                                     });
 }
  
 static async createBucketListProduct(req: Request, res: Response) {
   (models?.default as any)?.["bucketListProduct"].createbucketListProduct(req.body)
                                     .then((data: any) => {
                                        res.json(data)
                                     });
 }

 static async deleteBucketListProduct(req: Request, res: Response) {
   (models?.default as any)?.["bucketListProduct"].deletebucketListProducts(req.body)
                                     .then((data: any) => {
                                        res.json(data)
                                     });
 }
 


 static async getByBucketId(req: Request, res: Response) {
   let queryParams = req.query;

   let conditions: any = {};


   (models?.default as any)?.["bucketListProduct"].getByBucketId(queryParams)
                                     .then((data: any) => {
                                        res.json(data)
                                     });
 }

}