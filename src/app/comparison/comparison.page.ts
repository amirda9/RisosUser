import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MypatGQL } from 'src/generated/graphql';
import { P_ID } from '../constants';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.page.html',
  styleUrls: ['./comparison.page.scss'],
})
export class ComparisonPage implements OnInit {
  img: any;
  secondimg: string;
  ratio: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientgql: MypatGQL,
    private dataService: DataService
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.img = this.router.getCurrentNavigation().extras.state.image;
    }

    this.ratio = 1;
    if(dataService.getRatio()){
      this.ratio = dataService.getRatio();
    }
  }

  ngOnInit() {
    this.patientgql
      .watch({
        id: 'Patient:' + localStorage.getItem(P_ID),
      })
      .valueChanges.subscribe((res) => {
        this.secondimg = res.data.Patient.patientPic.smileImage;
        console.log(this.secondimg);
      });


    const imageUrl = URL.createObjectURL(this.img);
    const img = document.getElementById('image') as HTMLImageElement;
    img.src = imageUrl;
  }

  forward() {
    // console.log("go")
    // console.log(this._id)
    this.router.navigate(['/tabs/dr']);
  }

  backward() {
    this.router.navigate(['/tabs/tab1']);
  }
}
