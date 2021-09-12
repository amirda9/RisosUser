import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileGQL } from 'src/generated/graphql';
import { AUTHTOKEN, ID, P_ID, USERNAME } from '../constants';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  mobile: string;
  email: string;
  fname: string;
  lname: string;
  age: number;
  status: string;

  constructor(private profileGQL: ProfileGQL , private router: Router) {
    profileGQL.watch({id:'Profile:'+localStorage.getItem(ID)}).valueChanges.subscribe(res=>{
      this.mobile = res.data.Profile.phoneNumber;
      this.email = res.data.Profile.email;
      this.fname = res.data.Profile.firstName;
      this.lname = res.data.Profile.lastName;
      this.age = res.data.Profile.age;
      console.log(this.mobile,this.email,this.fname,this.lname);
    });
  }


  logout(){
    localStorage.removeItem(ID);
    localStorage.removeItem(USERNAME);
    localStorage.removeItem(P_ID);
    localStorage.removeItem(AUTHTOKEN);
    this.router.navigate(['/']);
  }

}
