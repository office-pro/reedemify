import * as admin from "firebase-admin";
import environment from "../config/environment";

// import Blob from "blob";

export class FirebaseStorageModel {

  static storage: any = null;
  static bucket: any = null;

  constructor() {
    FirebaseStorageModel.initializeApp();
  }

  static initializeApp() {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(JSON.stringify(JSON.parse(environment.firebaseStorage).json))),
      storageBucket: JSON.parse(environment.firebaseStorage).url,
    });
    FirebaseStorageModel.storage = admin.storage();
    FirebaseStorageModel.bucket = FirebaseStorageModel.storage.bucket();
  }

  static async uploadFiles(files: Array<any> = [], folderName: string = "") {
    if(files.length > 0) {
      const blobPromises: Array<Promise<any>> = files.map((file: any,index: number) => {
      
        file.originalname = "image".concat((index+1).toString())+"."+file.originalname.split(".")[file.originalname.split(".").length - 1];
        
        const filePath = folderName+"/"+file.originalname;
        const blobStorage = FirebaseStorageModel.bucket.file(filePath);
        const fileBlob = new Blob(file,file.mimetype);
      
        return new Promise((resolve: any, reject: any) => {
          blobStorage.createWriteStream()
            .end(fileBlob)
            .on('finish', () => {
              console.log(`Blob uploaded to ${filePath}`);
              resolve();
            })
            .on('error', (error: any) => {
              console.error(`Error uploading Blob to ${filePath}:`, error);
              reject(error);
            });
        });
      })

      return Promise.all(blobPromises)
    }
    return Promise.reject("failed")
  }

}