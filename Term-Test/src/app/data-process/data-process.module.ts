import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataProcessPageRoutingModule } from './data-process-routing.module';

import { DataProcessPage } from './data-process.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataProcessPageRoutingModule
  ],
  declarations: [DataProcessPage]
})
export class DataProcessPageModule {}
