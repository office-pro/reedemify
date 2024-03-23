import {Request, Response} from 'express';
import * as models from '../models/index';
import { S3StorageUploader } from '../object-storage-models/s3StorageUploader.model';

export class AddressController {

  
  static getAddress(req: Request, res: Response) {
    let addressId: number = !!req.query.addressId
			? parseInt(req?.query?.addressId as string)
			: 0;
    let userId: number = !!req.query.userId
			? parseInt(req.query.userId as string)
			: 0;
    let query: any = {};
    if(addressId) {
      query['addressId'] = addressId
    }

    if(userId) {
      query['userId'] = userId
    }
    
    (models?.default as any)?.['Address']
				.findAddressByAddressId(query)
				.then((data: any) => {
					res.json({ data: data });
				});
  }

  static createAddress(req: Request, res: Response) {
    console.log('body - ', req.body);

    (models?.default as any)?.['Address']
				.createAddress(req.body)
				.then((data: any) => {
					res.json({ data: data });
				});
  }

  static deleteAddress(req: Request, res: Response) {
    (models?.default as any)?.['Address']
				.deleteAddress(req.body)
				.then((data: any) => {
					res.json({ message: "data deleted successfully" });
				});
  }
  
}