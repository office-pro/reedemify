import multer from "multer";

export class UploadData {
  static get upload() {
    return multer({dest: 'files/'})
  }
}