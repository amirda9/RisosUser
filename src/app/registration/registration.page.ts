import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { RegisterGQL, Req_OtpGQL } from 'src/generated/graphql';
import { USERNAME } from '../constants';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {


  pass: string;
  passRep: string;
  phoneNo: string;
  email: string;
  constructor(private loadingcontroller: LoadingController, private registerGQL: RegisterGQL, private reqOtp: Req_OtpGQL,
     private router: Router , private alertcontroller: AlertController) { }

  ngOnInit() {
  }


  async signup(){
    if(this.pass === this.passRep){
    const loading = await this.loadingcontroller.create({
      message: 'Loading ...',
      duration:2000
      });
      loading.present();
      this.registerGQL.mutate({
        username:this.phoneNo,
        password:this.pass,
        email:this.email
      }).subscribe(next=>
        {
          // if(next.data !=null){
            localStorage.setItem(USERNAME,this.phoneNo);
            this.reqOtp.mutate({
              username:this.phoneNo
            });
            loading.dismiss();
            const navigationExtras: NavigationExtras = {
              state: {
                sid: this.phoneNo,
                transState:2
              }
            };
            this.router.navigate(['/verify'],navigationExtras);
          // }
          // else{
          //   console.log("error")
          // }
        },
        async errors=>{
        loading.dismiss();
        // console.log(errors)
        const alert = await this.alertcontroller.create({
          cssClass: 'my-custom-class',
          // header: 'Alert',
          // subHeader: 'Subtitle',
          message: 'You have already signed up !',
          buttons: [{text:'Try Again!',cssClass:'my-custom-class'}]
        });
        await alert.present();
      }
      );
      }
      else{
        const alert = await this.alertcontroller.create({
          cssClass: 'my-custom-class',
          // header: 'Alert',
          // subHeader: 'Subtitle',
          message: 'Passwords are not the same',
          buttons: [{text:'Try Again!',cssClass:'my-custom-class'}]
        });
        await alert.present();
      }

}


}
