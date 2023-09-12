import {Request, Response} from 'express'
import * as models from '../models/index';

export class ProductController {
  
  static async getProducts(req: Request, res: Response) {
    // console.log(models?.default as any);
    (models?.default as any)?.["product"].getAllProducts()
                                       .then((data: any) => {
                                        res.json(data)
                                      });

    // res.json("data")
  }

  static async createProducts(req: Request, res: Response) {

  }

  static async createProductCategories(req: Request, res: Response) {
     (models?.default as any)?.["productCategory"].createProductCategories(req.body)
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

  static async createProductSubCategory(req: Request, res: Response) {
    
  }

  static async getProductSubCategory(req: Request, res: Response) {
    
  }

}