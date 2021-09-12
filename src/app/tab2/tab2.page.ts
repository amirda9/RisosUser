import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MypatGQL, ProfileGQL, Update_PicGQL } from 'src/generated/graphql';
import { AUTHTOKEN, ID, P_ID, USERNAME } from '../constants';
import { CroppedEvent } from 'ngx-photo-editor';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  mobile: string;
  email: string;
  fname: string;
  lname: string;
  age: number;
  status: string;
  imageChangedEvent: any;
  smileImg: string;
  img1: any;
  base64: any;

  constructor(
    private profileGQL: ProfileGQL,
    private router: Router,
    private myPatgql: MypatGQL,
    private updatePic: Update_PicGQL,
    private alertcontroller: AlertController
  ) {
    myPatgql
      .watch({
        id: 'Patient:' + localStorage.getItem(P_ID),
      })
      .valueChanges.subscribe((res) => {
        if (res.data.Patient.patientPic) {
          this.smileImg = res.data.Patient.patientPic.smileImage;
        } else {
          this.smileImg = 'default-profile.jpg';
        }
      });

    profileGQL
      .watch({ id: 'Profile:' + localStorage.getItem(ID) })
      .valueChanges.subscribe((res) => {
        this.mobile = res.data.Profile.phoneNumber;
        this.email = res.data.Profile.email;
        this.fname = res.data.Profile.firstName;
        this.lname = res.data.Profile.lastName;
        this.age = res.data.Profile.age;
        console.log(this.mobile, this.email, this.fname, this.lname);
      });
  }

  logout() {
    localStorage.removeItem(ID);
    localStorage.removeItem(USERNAME);
    localStorage.removeItem(P_ID);
    localStorage.removeItem(AUTHTOKEN);
    this.router.navigate(['/']);
  }

  async fileChangeEvent(event: any){
    this.imageChangedEvent = event;
    console.log('here');
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      // header: 'Alert',
      // subHeader: 'Subtitle',
      message: 'Are you sure ?',
      buttons: [{text:'Yes',cssClass:'my-custom-class',handler:(blah)=>{
        const my: number = +localStorage.getItem(P_ID);
      this.updatePic
        .mutate({
          id: my,
          pics: {
            smileImage: event.file,
          },
        })
        .subscribe((res) => {
          console.log(res.data.updatePatientPic.status);
          this.myPatgql
            .watch({
              id: 'Patient:' + localStorage.getItem(P_ID),
            })
            .valueChanges.subscribe((res2) => {
              if (res2.data.Patient.patientPic) {
                this.smileImg = res2.data.Patient.patientPic.smileImage;
              } else {
                this.smileImg = 'default-profile.jpg';
              }
            });
        });
      }},
      {text:'No',cssClass:'my-custom-class'}]
    });
    await alert.present();
    // this.imageCropped(event)
  }

  // imageCropped(event: CroppedEvent) {
  //   console.log(event.file.size);
  //   if (event.file.size > 4000000) {
  //     this.heavy();
  //   } else {
  //     this.img1 = event.file;
  //     // this.base64 = event.base64;
  //     // this.fullimg = event.base64;
  //     const my: number = +localStorage.getItem(P_ID);
  //     this.updatePic
  //       .mutate({
  //         id: my,
  //         pics: {
  //           smileImage: this.img1,
  //         },
  //       })
  //       .subscribe((res) => {
  //         console.log(res.data.updatePatientPic.status);
  //         this.myPatgql
  //           .watch({
  //             id: 'Patient:' + localStorage.getItem(P_ID),
  //           })
  //           .valueChanges.subscribe((res2) => {
  //             if (res2.data.Patient.patientPic) {
  //               this.smileImg = res2.data.Patient.patientPic.smileImage;
  //             } else {
  //               this.smileImg = 'default-profile.jpg';
  //             }
  //           });
  //       });
  //   }
  // }




  // async heavy() {
  //   const alert = await this.alertcontroller.create({
  //     cssClass: 'my-custom-class',
  //     // header: 'Alert',
  //     // subHeader: 'Subtitle',
  //     message: 'File is too heavy',
  //     buttons: [{
  //       text: 'Try Again!', cssClass: 'my-custom-class', handler: (blah) => {

  //       }
  //     }]
  //   });

  //   await alert.present();
  // }


}
