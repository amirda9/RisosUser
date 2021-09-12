import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.page.html',
  styleUrls: ['./comparison.page.scss'],
})
export class ComparisonPage implements OnInit {
  img: any;
  secondimg: string;
  ratio: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.img = this.router.getCurrentNavigation().extras.state.image;
    }
  }

  ngOnInit() {
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
