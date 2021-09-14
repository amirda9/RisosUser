import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ratio: number;

  constructor() { }

  setRatio(e) {
    this.ratio = e;
  }

  getRatio(){
    return this.ratio;
  }

}
