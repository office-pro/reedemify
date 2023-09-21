export interface ProductImageDetail {
  productImageName: string;
  productImageFiles: Array<any>;
  imageUrls: Array<string>;

  get isImageUrlsPresent(): boolean;
  get isProductImageFilesPresent(): boolean;
}

export interface ProductImageDetails {
  productImageDetails: Array<ProductImageDetail>;
}

export class ProductImageDetailModel implements ProductImageDetail {
  productImageName: string = '';
  productImageFiles: Array<any> = [];
  imageUrls: string[] = [];

  constructor(productImageName: string = '', productImageFiles: Array<any> = [], imageUrls: Array<string> = []) {
    this.productImageName = productImageName;
    this.productImageFiles = productImageFiles;
    this.imageUrls = imageUrls;
  }

  get isImageUrlsPresent() {
    return this.imageUrls.length > 0;
  }

  get isProductImageFilesPresent() {
    return this.productImageFiles.length > 0;
  }
  
}
