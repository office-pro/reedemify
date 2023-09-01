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


}