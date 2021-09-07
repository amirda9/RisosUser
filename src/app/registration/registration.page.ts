import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {


  pass: string;
  pass_rep: string;
  constructor() { }

  ngOnInit() {
  }


  async signup(){
    if(this.pass == this.pass_rep){
    const loading = await this.loadingcontroller.create({
      message: 'Loading ...',
      duration:2000
      });
      loading.present();
      this.registerGQL.mutate({
        username:this.phone_no,
        password:this.pass,
        email:this.email
      }).subscribe(next=>
        {
          // if(next.data !=null){
            localStorage.setItem(USERNAME,this.phone_no)
            this.req_otp.mutate({
              username:this.phone_no
            })
            loading.dismiss()
            let navigationExtras: NavigationExtras = {
              state: {
                s_id: this.phone_no,
                trans_state:2
              }
            };
            this.router.navigate(['/verify'],navigationExtras)
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
