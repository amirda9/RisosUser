import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrPageRoutingModule } from './dr-routing.module';

import { DrPage } from './dr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrPageRoutingModule
  ],
  declarations: [DrPage]
})
export class DrPageModule {}
