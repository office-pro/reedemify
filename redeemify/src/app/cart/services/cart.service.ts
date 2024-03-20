import { Injectable } from '@angular/core';
import { SearchParamModel } from 'src/app/shared-components/models/search-params.model';
import { ProductCartService } from 'src/app/shared-components/services/product-cart.service';
import { UserContext } from 'src/app/shared-components/services/user-context.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Array<any> = [];
  private brandId: number = 0;
  private userId: number = 0;

  constructor(
    private userContext: UserContext,
    private productCartService: ProductCartService
  ) {
    // fetching context i.e brandId and userId from userContext
    this.userContext.brand$.subscribe((context: any) => {
      this.brandId = context.brandId;
      this.userId = context.user.userId;
      this.fetchCartItems();
    });
  }

  fetchCartItems() {
    let searchParams = new SearchParamModel();
    searchParams['userId'] = this.userId;
    searchParams['brandId'] = this.brandId;

    this.productCartService
      .getCartItems(searchParams)
      .subscribe((data: any) => {
        this.mapDataToCart(data.data);
      });
  }

  // creating payload for saving cart instance
  get cartPayload() {
    return this.cart.map((cartObj) => {
      return {
        quantity: cartObj.quantity,
        points: cartObj.product.points,
        productId:
          cartObj.product.productId || cartObj.product.product.productId,
        total: cartObj.quantity * cartObj.product.points,
        brandId: this.brandId,
        userId: this.userId,
      };
    });
  }

  get totalProducts() {
    return this.cart.length;
  }

  get totalItems() {
    return this.cart
      .map((product: any) => parseInt(product.quantity))
      .reduce((a, b) => a + b, 0);
  }

  get totalPrice() {
    return this.cart
      .map(
        (product: any) =>
          parseInt(product.product.points) * parseInt(product.quantity)
      )
      .reduce((a, b) => a + b, 0);
  }

  addProducts(products: any) {
    let cartProducts: any;
    if (Array.isArray(products)) {
      cartProducts = products.map((product: any) => {
        let obj = { product, quantity: 1 };
        return obj;
      });
      cartProducts.forEach((cartProduct: any) => {
        if (!this.checkIfProductExistInCart(cartProduct)) {
          this.cart.push(cartProduct);
        }
      });
    } else {
      let obj = { product: products, quantity: 1 };
      if (!this.checkIfProductExistInCart(obj)) {
        this.cart.push(obj);
      }
    }
    this.putCartItems();
  }

  putCartItems() {
    let searchParams = new SearchParamModel({});
    searchParams['cartItems'] = this.cartPayload;
    this.productCartService.addToCart(searchParams).subscribe((data: any) => {
      this.mapDataToCart(data.data);
    });
  }

  removeProducts(product: any) {
    let index: number = this.cart.indexOf(product);
    let searchParams = new SearchParamModel();
    searchParams['cartItemsIds'] = [product.cartId];
    this.productCartService
      .deleteCartItems(searchParams)
      .subscribe((data: any) => {
        this.cart.splice(index, 1);
      });
  }

  refreshProduct() {
    if (this.isItemsPresent) {
      this.cart = this.cart.filter(
        (cartProduct: any) => cartProduct.quantity > 0
      );
      this.putCartItems()
    }
  }

  increaseProductQuantity(product: any) {
    product.quantity += 1;
    this.refreshProduct();
  }

  decreaseProductQuantity(product: any) {
    product.quantity -= 1;
    this.refreshProduct();
  }

  get isItemsPresent() {
    return this.cart.length > 0;
  }

  get cartItems() {
    return this.cart;
  }

  private checkIfProductExistInCart(cartProduct: any) {
    if (this.cart.length > 0) {
      let productObj = this.cart.filter(
        (cartItem: any) =>
          cartItem.product.product.productName ==
          cartProduct.product.product.productName
      );
      if (productObj.length > 0) {
        productObj[0].quantity += 1;
        return true;
      }
    }
    return false;
  }

  private mapDataToCart(data: Array<any>) {
    if (data?.length > 0) {
      this.cart = data.map((obj: any) => {
        return {
          product: {
            product: {
              ...obj.product,
            },
            points: obj.points,
          },
          quantity: obj.quantity,
          cartId: obj.cartId,
        };
      });
    }

    return [];
  }
}
