import {Component, Input, ViewChild} from "@angular/core"
import { AppUtilityService } from "../services/app-utility.service";
import { UserService } from "src/app/services/user.service";
import { SearchParamModel } from "../models/search-params.model";
import { UserContext } from "../services/user-context.service";
import { UsersDataDirective } from "../directives/users.directive";
import { MatDialog } from "@angular/material/dialog";
import { EditUserComponent } from "../edit-user/edit-user.component";

@Component({
  selector: "users-table",
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

  @ViewChild('usersArr') 
  usersDataDirective: UsersDataDirective | any;
  
  @Input()
  userData: Array<any> = [];


  @Input()
  brandId: number = 0;

  @Input()
  apiCall: boolean = true;
  
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'mobileNo','roleName','actions'];
  currentUser: any = {};
  currentUser$: any;
  constructor(private appUtility: AppUtilityService, private userService: UserService, private userContext: UserContext,public dialog: MatDialog) {
    this.currentUser$ = this.userContext.currentUser.subscribe((data: any) => {
      this.currentUser = data;
      this.brandId = data.brandId;
    })
  }

  openDialog(elem: any) {
    const dialogRef = this.dialog.open(EditUserComponent,{
      data: {
        user:elem,
        scope:{
          usersDataDirective:this.usersDataDirective
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onDelete(elem: any) {
    if(!!elem.userId) {
      this.appUtility.presentConfirmationPopup(`Do you want to delete ${elem.firstName + " "+ elem.lastName } ?`, "Confirm Delete", {
        onConfirm: () => {
          this.userService.deleteUsers(new SearchParamModel({users: [elem.userId]}))
                          .subscribe((data) => {
                            console.log(elem.firstName + " " + elem.lastName + "deleted Successfully");
                            this.usersDataDirective.refreshData(new SearchParamModel({brandId: this.currentUser.brandId}));
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

  onDestroy() {
    if(!!this.currentUser$) {
      this.currentUser$.unsubscribe();
    }
  }
}