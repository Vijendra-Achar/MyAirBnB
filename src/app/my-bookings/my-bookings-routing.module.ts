import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBookingsPage } from './my-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: MyBookingsPage
  },
  {
    path: 'view-my-booking/:bookingId',
    loadChildren: () => import('./view-my-booking/view-my-booking.module').then(m => m.ViewMyBookingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBookingsPageRoutingModule { }
