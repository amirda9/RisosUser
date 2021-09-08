import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ForgetPassGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  phoneNo: string;
  constructor(private forgetpassgql: ForgetPassGQL , private router: Router , private alertcontroller: AlertController) {}

  ngOnInit() {}

  forgetpass() {
    this.forgetpassgql
      .mutate({
        phoneNumber: this.phoneNo,
      })
      .subscribe(async (res) => {
        if (res.data.forgetPass.status === 'Success') {
          // console.log(this.id)
          const navigationExtras: NavigationExtras = {
            state: {
              sid: this.phoneNo,
              transState: 1,
            },
          };
          this.router.navigate(['/verify'], navigationExtras);
        } else {
          const alert = await this.alertcontroller.create({
            cssClass: 'my-custom-class',
            // header: 'Alert',
            // subHeader: 'Subtitle',
            message: 'You have to sign up first!',
            buttons: [{ text: 'Try Again!', cssClass: 'my-custom-class' }],
          });
          await alert.present();
        }
      });
  }
}
