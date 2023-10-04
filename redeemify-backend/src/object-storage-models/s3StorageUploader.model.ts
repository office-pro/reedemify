import AWS from "aws-sdk";
import multerS3 from 'multer-s3';
import environment from "../config/environment";
import {Request, Response} from 'express';
import { Readable } from "stream";

export class S3StorageUploader {

  static s3: any;

  constructor() {
    S3StorageUploader.s3 = new AWS.S3({
      ...environment.awsStorage.securityCredentials,
      ...{
        params: {
          Bucket: environment.awsStorage.bucketName
        }
      }
    });
  }

  static async uploadFiles(req: Request,res: Response,files: Array<any>) {
    let uploadedFiles: Array<any> = []
    await Promise.all(files).then((data: any) => {
      uploadedFiles = [...data]
    })
    const uploadedPromises: Array<Promise<any>> = uploadedFiles.map(async (file: any,index: number) => {
      let folderName = `${req?.body?.productImageName}/${Date.now()}_${((req?.files as any)[index] as any)?.originalname}`;
      const params: AWS.S3.PutObjectRequest = {
          Bucket: environment.awsStorage.bucketName,
          Key: folderName,
          Body: Readable.from(file),// Convert the buffer to a readable stream
          ACL: 'public-read', // Set the ACL to public-read 
      };

      return new Promise<void>((resolve, reject) => {
        S3StorageUploader.s3.upload(params, (err: any, data: any) => {
          if (err) {
            console.error('Error uploading to S3:', err);
            reject(err);
          } else {
            console.log('Image resized and uploaded to S3:', data.Location);
            resolve(data.Location);
          }
        });
      });


    })
    return Promise.all(uploadedPromises);

  }

}