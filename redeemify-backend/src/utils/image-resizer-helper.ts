import sharp from 'sharp';
import {Request} from "express"
import environment from '../config/environment';

export class ImageResizerHelper {

  static resizeImages(files: Array<any> = [], resizeImageParams = null) {
    
    let promisedFiles: Array<any> = [];
    if(files.length > 0) {
      promisedFiles = files.map(async(file: any) => {
        const resizedImage: any = await sharp(file.buffer).resize(!!resizeImageParams ? resizeImageParams : environment.resizeImageParameters)
                                                          .toBuffer();
        return resizedImage
      })
    }
    return promisedFiles;
  }

}