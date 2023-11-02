import {Request, Response} from 'express'
import pool from '../static/db'
// import { UserModel } from '../Models/users.model';
import * as models from '../models/index';

export class UserController {
  
  static async getUsers(req: Request, res: Response) {
    
    (models?.default as any)?.["users"].getUsers()
                                       .then((data: any) => {
                                        res.json(data)
                                      });

  }

}