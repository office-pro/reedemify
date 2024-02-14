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
                                       .then((dataArr: any) => {
                                        if(!!dataArr && dataArr.length > 0) {
                                          let walletArr:Array<any> = [];
                                          walletArr = dataArr.map((userObj: any) => {
                                            const {brandId,userId} = userObj;
                                            const points = (req.body.filter((bodyObj: any) => bodyObj.mobileNo == userObj.mobileNo)[0]).points; 
                                            return {brandId,userId,points};
                                          });
                                          (models?.default as any)?.["wallet"].createWallet(walletArr)
                                                                              .then((walletData: any) => {
                                                                                res.json({data: dataArr,total}) 
                                                                              })
                                        } else {
                                          res.json({data: dataArr,total})  
                                        }
                                      },(err: any) => {
                                          res.json({errorMessage: "duplicate entry present"})
                                        });

  }

}