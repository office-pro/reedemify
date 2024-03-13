export const template = (scope: any) => `

    <div class="product-category-wrapper">
    <ion-list>
      
      <ion-item>
        <ion-input [(ngModel)]="${scope}.['productCategoryName']" [value]="${scope}.['productCategoryName']" label="Product Category Name" labelPlacement="stacked" placeholder="Enter product Category"></ion-input>
      </ion-item>

    </ion-list>

    <ion-button (click)="${scope}?.createProductCategory(${scope}.['productCategoryName'])">Save</ion-button>
    <ion-button (click)="${scope}?.['onCancel']()">Cancel</ion-button>

    <div>
    
  

`;
