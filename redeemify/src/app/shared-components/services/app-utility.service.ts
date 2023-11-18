import { Injectable } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { ThemeService } from "./theme.service";

@Injectable({
  providedIn: 'root'
})

export class AppUtilityService {
  private isLoading =  false;
  private loading: any = null;

  constructor(private loadingController: LoadingController, private alertController: AlertController, private themeService: ThemeService) {}

  async showLoading() {

    if(!this.isLoading) {
      this.loading = await this.loadingController.create({
        id: "loading",
        message: 'Loading',
      });

      this.loading.present();
    }

  }

  dismissLoading() {
      if(!!this.loading) {
        this.isLoading = false;
        this.loading.dismiss()
      }
  }

  async presentConfirmationPopup(message?: string, header?: string, button1?:{buttonName: string,onConfirm: any, cssClass: any},  button2?:{buttonName: string,onConfirm: any,cssClass: any}) {
    const alert = await this.alertController.create({
      header: !!header ? header : 'Confirmation',
      message: !!message ? message : 'Are you sure you want to perform this action?',
      buttons: [
        {
          text: button2?.buttonName ? button2?.buttonName : 'Cancel',
          cssClass: button2?.cssClass ? button2.cssClass : 'secondary',
          handler: (blah) => {
            if(button2?.onConfirm) {
              button2?.onConfirm();
            }
            this.alertController.dismiss();
          }
        },
        {
          text: button1?.buttonName ? button1?.buttonName : "Ok",
          cssClass: button1?.cssClass ? button1.cssClass : "",
          handler: () => {
            if(button1?.onConfirm) {
              button1?.onConfirm();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  updateTheme(primaryColor: string = "#ffffff", secondaryColor: string="#446879", headerColor: string = "#312f92", fontColor: string = "#292828") {
    this.themeService.updateCustomColors(primaryColor,secondaryColor, headerColor, fontColor);
  }
}