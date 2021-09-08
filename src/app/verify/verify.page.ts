import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { Req_OtpGQL, Verify_UserGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  transState = 1;
  username: string;
  code: string;
  subscription: Subscription;
  source = timer(1000, 1000);
  time: number;
  duration= 60;
  timeLeft =true;

  constructor(
    private verifyuserGQL: Verify_UserGQL,
    private router: Router,
    private route: ActivatedRoute,
    private reqOtp: Req_OtpGQL
  ) {
    // this.username = localStorage.getItem(USERNAME);
  }

  ngOnInit() {
    this.observableTimer();
    // console.log(this.time);
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.username = this.router.getCurrentNavigation().extras.state.sid;
        this.transState =
          this.router.getCurrentNavigation().extras.state.transState;
      }
    });
  }

  resend() {
    if (!this.timeLeft) {
      this.reqOtp.mutate({
        username: this.username,
      }).subscribe((next) => {
        console.log(next.data.requestOtp.status);
      });
    }
  }

  observableTimer() {
    this.subscription = this.source.subscribe((val) => {
      if (val < this.duration) {
        this.time = this.duration - val;
        // console.log(this.time);
      }
      if (val === this.duration) {
        // console.log("reached")
        this.timeLeft = false;
        // this.TryAgain()
      }
      // console.log(this.time)
    });
  }

  send() {
    this.verifyuserGQL
      .mutate({
        username: this.username,
        otp: this.code,
      })
      .subscribe((next) => {
        console.log(next.data.verifyUser.status);
        if (next.data.verifyUser.status === 'success') {
          if (this.transState === 1) {
            const navigationExtras: NavigationExtras = {
              state: {
                id: this.username,
              },
            };
            // this.valid = true;
            this.router.navigate(['/reset-pass'], navigationExtras);
          }
          if (this.transState === 2) {
            const navigationExtras: NavigationExtras = {
              state: {
                status: 0,
              },
            };
            // this.valid = true;
            this.router.navigate(['/login'], navigationExtras);
          }
        }
        // if(next.data.verifyUser.status=="failed")
        else {
          // this.valid = false;
          // var el: HTMLElement = document.getElementById('form');
          // el.className = "not_valid";
          // el.classList.remove('valid');
        }
      });
  }
}
