import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";
import { JwtTokenDecoderService } from "../shared-components/services/jwt-token.service";
import { AppUtilityService } from "../shared-components/services/app-utility.service";
import { UserContext } from "../shared-components/services/user-context.service";

@Component({
  selector: "login-page",
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm: NgForm | any;

  constructor(private router: Router, private loginService: LoginService, private jwtToken: JwtTokenDecoderService, private appUtility: AppUtilityService, private userContextService: UserContext) {
    this.appUtility.updateTheme();
  }

  login(form: NgForm) {
    this.loginService.login(form.value).subscribe((data: any) => {
      console.log('res data - ', data);
      this.jwtToken.setjwtToken(data.data);
      let userData = this.jwtToken.decodeToken();
      this.userContextService.setUser(userData);
      this.router.navigateByUrl("/home");
    })
    // console.log(form);
    // this.router.navigateByUrl("/home")
  }
}