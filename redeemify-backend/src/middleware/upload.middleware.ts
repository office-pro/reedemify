import AWS, { S3 } from 'aws-sdk';
import multer from "multer";
import multerS3 from 'multer-s3';
import environment from '../config/environment';

const s3: any = new AWS.S3({...environment.awsStorage.securityCredentials,...{
  params: {
    Bucket: environment.awsStorage.bucketName
  }
}});

export class UploadData {
  static s3: any;
  constructor() {
    UploadData.s3 = s3;
  }

  static get upload() {
    return multer({ storage: multer.memoryStorage()})
  }
}





// import AWS, { S3 } from 'aws-sdk';
// import multer from "multer";
// import multerS3 from 'multer-s3';
// import environment from '../config/environment';

// const s3: any = new AWS.S3({...environment.awsStorage.securityCredentials,...{
//   params: {
//     Bucket: environment.awsStorage.bucketName
//   }
// }});

// export class UploadData {
//   static s3: any;
//   constructor() {
//     UploadData.s3 = s3;
//   }

//   static get upload() {
//     return multer({ storage: multerS3({
//       s3,
//       bucket: environment.awsStorage.bucketName,
//       acl: 'public-read', // Optional: Set access control, e.g., 'public-read' for public access
//       contentType: multerS3.AUTO_CONTENT_TYPE, // Automatically set content type based on the file extension
//       key: function (req: any, file:any, cb) {
//         const fileKey = `${req?.body?.productImageName}/${Date.now()}_${file.originalname}`;
//         cb(null, fileKey);
//       },
//   }),})

    
//   }
// }

