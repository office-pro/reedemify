import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { UserService } from '../services/user.service';
import { RouteUtils } from '../utils/route.utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  routeUtils = RouteUtils;

  constructor(private http: HttpClient, private userService: UserService, public router: Router) {
  }

  fetchData() {
    
  }

}

