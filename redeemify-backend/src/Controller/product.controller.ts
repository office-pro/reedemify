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

}