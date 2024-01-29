import {Component, Input, ViewChild} from "@angular/core"
import { AppUtilityService } from "../services/app-utility.service";
import { UserService } from "src/app/services/user.service";
import { SearchParamModel } from "../models/search-params.model";
import { UserContext } from "../services/user-context.service";
import { UsersDataDirective } from "../directives/users.directive";
import { MatDialog } from "@angular/material/dialog";
import { EditUserComponent } from "../edit-user/edit-user.component";
import { BucketsDataDirective } from "../directives/buckets.directive";
import { Router } from "@angular/router";
import { ProductService } from "src/app/shared-components/services/products.services";

@Component({
  selector: "buckets-table",
  templateUrl: './buckets-table.component.html',
  styleUrls: ['./buckets-table.component.scss'],
})
export class BucketsTableComponent {


  @ViewChild('bucketsArr') 
  bucketsDataDirective: BucketsDataDirective | any;
  
  @Input()
  bucketsData: Array<any> = [];

  @Input()
  brandId: number = 0;

  @Input()
  apiCall: boolean = true;
  
  displayedColumns: string[] = ['bucketName', 'user', 'createdAt', 'updatedAt','actions'];
  currentUser: any = {};
  currentUser$: any;
  constructor(private appUtility: AppUtilityService, private productService: ProductService, private userContext: UserContext,public dialog: MatDialog, private router: Router) {
    this.currentUser$ = this.userContext.currentUser.subscribe((data: any) => {
      this.currentUser = data;
      this.brandId = data.brandId;
    })
  }

  openDialog(elem: any) {
    const dialogRef = this.dialog.open(EditUserComponent,{
      data: elem
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onDelete(elem: any) {
    if(!!elem.userId) {
      this.appUtility.presentConfirmationPopup(`Do you want to delete ${elem.bucketName } ?`, "Confirm Delete", {
        onConfirm: () => {
          this.productService.deleteProductBuckets(new SearchParamModel({bucketIds: [elem.bucketId]}))
                          .subscribe((data) => {
                            console.log(elem.bucketName + "deleted Successfully");
                            this.bucketsDataDirective.refreshData(new SearchParamModel({brandId: this.currentUser.brandId}));
                          })
        },
        buttonName: "Delete",
        cssClass:"danger"
      })
    }
  }

  onEdit(elem: any) {
    console.log("elem - ",elem)
    this.openDialog(elem);
  }

  routeToBucketProducts(element: any) {
    this.router.navigateByUrl(`/products/bucket/details/${element.bucketId}`);
  }

  onDestroy() {
    if(!!this.currentUser$) {
      this.currentUser$.unsubscribe();
    }
  }
}


