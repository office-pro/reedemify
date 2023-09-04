import {Request, Response} from 'express'
import pool from '../static/db'
// import { UserModel } from '../Models/users.model';
import * as models from '../models/index';

export class UserController {
  
  static async getUsers(req: Request, res: Response) {
    // const client = await pool.connect();
    // const data = await pool.query('select * from person');
    // if(data?.rows?.length > 0) {
    //   let rowData: Array<UserModel> = data.rows.map((obj: any) => {
    //      let temp = new UserModel(obj.personid, obj.fullname);
    //      return temp;
    //   });
    //   res.json(rowData);
    //   pool.end();
    // }

    // res.json([]);

    // console.log((models?.default as any)?.["users"].getUsers());
    (models?.default as any)?.["users"].getUsers()
                                       .then((data: any) => {
                                        res.json(data)
                                      });

  
  }

  static async getBrandUsers(req: Request, res: Response) {

    (models?.default as any)?.["brands"].findAllBrands()
                                       .then((data: any) => {
                                        res.json(data)
                                      });

  
  }

  static async createBrand(req: Request, res: Response) {

    (models?.default as any)?.["brands"].createBrand(req?.body)
                                       .then((data: any) => {
                                        res.json(data)
                                      }, () => {
                                        res.json({errorMessage: "Data already exist"})
                                      });

  
  }

  static async createBrands(req: Request, res: Response) {

    (models?.default as any)?.["brands"].createBrands(req?.body)
                                       .then((data: any) => {
                                        res.json(data)
                                      }, (err: any) => {
                                        res.json({errorMessage: "duplicate entry present"})
                                      });

  
  }

  


}