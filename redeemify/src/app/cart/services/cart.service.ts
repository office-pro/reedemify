import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Array<any> = [];

  get totalProducts() {
    return this.cart.length;
  }

  get totalItems() {
    return this.cart.map((product: any) => parseInt(product.quantity))
      .reduce((a, b) => a + b, 0);;
  }

  get totalPrice() {
    return this.cart
      .map((product: any) => parseInt(product.product.points) * parseInt(product.quantity))
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
  }

  removeProducts(product: any) {
    let index: number = this.cart.indexOf(product);
    this.cart.splice(index, 1);
  }

  refreshProduct() {
    if (this.isItemsPresent) {
      this.cart = this.cart.filter(
        (cartProduct: any) => cartProduct.quantity > 0
      );
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
          cartItem.product.product.productName == cartProduct.product.product.productName
      );
      if (productObj.length > 0) {
        productObj[0].quantity += 1;
        return true;
      }
    }
    return false;
  }
}
