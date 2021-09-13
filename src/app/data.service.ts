import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ratio;

  constructor() { }

  setRatio(e) {
    this.ratio = e;
  }

  getRatio(){
    return this.ratio;
  }

}
