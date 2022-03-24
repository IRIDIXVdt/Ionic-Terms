import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataProcessPage } from './data-process.page';

const routes: Routes = [
  {
    path: '',
    component: DataProcessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataProcessPageRoutingModule {}
