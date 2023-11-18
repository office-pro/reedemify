import {Request, Response} from 'express'
import * as models from '../models/index';

export class UserController {
  
  static async getUsers(req: Request, res: Response) {
    const total = await (models?.default as any)?.["users"]?.count();
    const userId = req.params?.["userId"];
    const brandId = req.params?.["brandId"];
    let options: any = {};
    if(!!userId) {
      options.where = {...(!!options.where ? options.where : {}),userId: userId}
    }
    if(!!brandId) {
      options.where = {...(!!options.where ? options.where : {}) ,brandId: brandId}
    }
    (models?.default as any)?.["users"].getUsers(options)
                                       .then((data: any) => {
                                        res.json({data,total})
                                      });
  }

  static async deleteUsers(req: Request, res: Response) {
    (models?.default as any)?.["users"].deleteUsers(req.body)
                                      .then((data: any) => {
                                        res.json({message: "data deleted successfully"})
                                      });

  }

  static async createUsers(req: Request, res: Response) {
    const total = await (models?.default as any)?.["users"]?.count();
    (models?.default as any)?.["users"].createUsers(req.body)
                                       .then((data: any) => {
                                        res.json({data,total})
                                      },(err: any) => {
                                          res.json({errorMessage: "duplicate entry present"})
                                        });

  }

}