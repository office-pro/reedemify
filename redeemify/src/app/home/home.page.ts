import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  displayedColumns: string[] = ['firstName', 'lastName', 'brandName', 'roleName'];
  dataSource = ELEMENT_DATA;

  constructor(private http: HttpClient, private userService: UserService) {
    this.userService.getAllUsers()
                    .subscribe((data: any) => {
                      this.dataSource = data;
                    })
  }




  fetchData() {
    this.http.get("http://localhost:3000/users",
    {
      headers: new HttpHeaders().set("Access-Control-Allow-Origin", "*")
    .set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    .set("Access-Control-Allow-Headers", "Content-Type")
    }).subscribe((data) => {
      console.log("data - ", data);
    })
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
