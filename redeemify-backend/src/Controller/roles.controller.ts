import {Request, Response} from 'express'
import * as models from '../models/index';
import { S3StorageUploader } from '../object-storage-models/s3StorageUploader.model';

export class RoleController {
  
  static async getRoles(req: Request, res: Response) {
    const total = await (models?.default as any)?.["roles"]?.count();
    (models?.default as any)?.["roles"].findAllRoles()
                                       .then((data: any) => {
                                        res.json({data, total});
                                    });
  
  }
}