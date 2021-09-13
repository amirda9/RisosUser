import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';


import { DrCComponent } from './dr-c/dr-c.component';

@NgModule({
  declarations: [DrCComponent],
  imports: [IonicModule,CommonModule],
  exports:[DrCComponent]

})
export class SharedModule {}
