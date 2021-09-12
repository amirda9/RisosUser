import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoginGQL , PatientGQL } from 'src/generated/graphql';
import { AUTHTOKEN, ID, P_ID, USERNAME } from '../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  id: string;
  pass: string;
  token: string;
  loginBool: boolean;
  constructor(private loginGQL: LoginGQL,private loadingcontroller: LoadingController,private router: Router
    , private alertcontroller: AlertController , private patientgql: PatientGQL) { }

  ngOnInit() {
  }


  async login(){
    const myId = this.id.trim();
    const loading = await this.loadingcontroller.create({
      message:  'Loading ...'
      });
      loading.present();
      this.loginGQL.mutate({
        username:myId,
        password:this.pass

      }).subscribe(next=>
        {
          if(next.data.tokenAuth.token !=null){
            this.loginBool = true;
            this.token = next.data.tokenAuth.token;
            localStorage.setItem(ID,next.data.tokenAuth.profile);
            localStorage.setItem(AUTHTOKEN,this.token);
            localStorage.setItem(USERNAME,myId);
            this.patientgql.watch({
              profile:next.data.tokenAuth.profile
            }).valueChanges.subscribe(res=>{
              localStorage.setItem(P_ID,res.data.allPatient.edges[0].node.id);
              loading.dismiss();
              this.router.navigate(['/tabs/tab1']);
            });
            // console.log(this.username)
          }
        },
        async errors=>{
          console.log(errors);
          const alert = await this.alertcontroller.create({
            cssClass: 'my-custom-class',
            // header: 'Alert',
            // subHeader: 'Subtitle',
            message: 'Invalid Creditentials',
            buttons: [{text:'Try Again!',cssClass:'my-custom-class'}]
          });
          loading.dismiss();
          await alert.present();

        }
      );
    }


}
