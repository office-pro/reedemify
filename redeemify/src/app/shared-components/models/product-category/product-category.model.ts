import { BaseModel } from "../base/base-model";

export class ProductCategoryModel extends BaseModel<ProductCategoryModel> {
  productCategoryId?: string = "";
  productCategoryName: string = "";
  productCategoryDesc: string = "";

  constructor(productCategoryName: string = "", productCategoryDesc: string = "") {
    super();
    this.productCategoryName = productCategoryName;
    this.productCategoryDesc = productCategoryDesc;
  }

  get isProductCategoryNamePresent() {
    return this.isDataPresent((() => this.productCategoryName).bind(this))
  }

  get isProductCategoryDescPresent() {
    return this.isDataPresent((() => this.productCategoryDesc).bind(this))
  }

  get isProductCategoryValid() {
    return this.isProductCategoryDescPresent && this.isProductCategoryNamePresent;
  }

  get payload() {
    const {productCategoryDesc,productCategoryName} = this
    return {productCategoryDesc,productCategoryName};
  }
}