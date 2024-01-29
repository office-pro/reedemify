import {Request, Response} from 'express'
import * as models from '../models/index';
// import { FirebaseStorageModel } from '../object-storage-models/firebaseStorage.model';
// import { VultrModel } from '../object-storage-models/vultr.model';
// import { VultrResponseHelper } from '../utils/vultr-response-helpers';


export class BucketController {
   
  
  static async getBucket(req: Request, res: Response) {
    const where: any = {};
    if(req.params.bucketId) {
      where.bucketId = req.params.bucketId;
    }
    (models?.default as any)?.["bucket"].getAllbuckets({where})
                                      .then((data: any) => {
                                         res.json(data)
                                      });
  }

   static async getMappedBucketByBrand(req: Request, res: Response) {
      const where: any = {brandId: req.params.brandId};
      if(!!req.params.bucketId) {
         where.bucketId = req.params.bucketId;
      }
      (models?.default as any)?.["brandbucketmapper"].getAllBrandsByBuckets({where})
                                       .then((data: any) => {
                                          res.json(data)
                                       });
   }

   static async bindMappedBucketByBrand(req: Request, res: Response) {
      const body = req.body;
      (models?.default as any)?.["brandbucketmapper"].bindMappedBucketByBrand(req.body)
                                       .then((data: any) => {
                                          res.json(data)
                                       });
   }
                                                                                                                                                                                   
  static async createBucket(req: Request, res: Response) {
    (models?.default as any)?.["bucket"].createbucket(req.body)
                                      .then((data: any) => {
                                         let bucketNames: Array<string> = req.body.map((data: any) => data.bucketName);
                                         let where = {
                                          bucketName: [...bucketNames]
                                         };
                                          console.log("names - ",bucketNames);
                                         (models?.default as any)?.["bucket"].getAllbuckets({where}).then((val: any) => {
                                            let names = val.map((arrData: any) => arrData.dataValues).map((obj: any) => {return {bucketId:obj.bucketId, bucketName: obj.bucketName}});
                                            res.json({data: names});
                                         })
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
                                       res.json({message: "added data successful"})
                                     });
 }

 static async mapBrandToBucket(req: Request, res: Response) {
   (models?.default as any)?.["brandbucketmapper"].createbucket(req.body)
                                     .then((data: any) => {
                                       res.json({message: "added data successful"})
                                     });
 }

 static async editBucketListProduct(req: Request, res: Response) {
   let where = {
      onSucess: (updatedBucket: any) => {
        console.log("bucket updated successfully - ", updatedBucket);
        res.json({message: "added data successful"});
      },
      onError: (error: any) => {
        console.log("bucket updated successfully - ", error);
        res.json({message: "failed to add data successful"});
      }
   };
   (models?.default as any)?.["bucketListProduct"].editbucketListProduct(req.body, where);
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