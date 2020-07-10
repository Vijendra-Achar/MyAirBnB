import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBookingsPage } from './my-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: MyBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBookingsPageRoutingModule {}
