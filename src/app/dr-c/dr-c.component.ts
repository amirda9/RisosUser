import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dr-c',
  templateUrl: './dr-c.component.html',
  styleUrls: ['./dr-c.component.scss'],
})
export class DrCComponent implements OnInit {
  @Input() name: string;
  @Input() src: string;
  @Input() rating: string;
  constructor() {}

  ngOnInit() {
    if (this.src === '/profile/default-profile.jpg') {
      // console.log('here');
      this.src = 'default-profile.jpg';
    }
    if(!this.name){
      this.name='risos';
    }
  }
}
