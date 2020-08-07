import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMyBookingPage } from './view-my-booking.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMyBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMyBookingPageRoutingModule {}
