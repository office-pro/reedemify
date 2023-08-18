import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}




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
