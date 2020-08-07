import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMyBookingPageRoutingModule } from './view-my-booking-routing.module';

import { ViewMyBookingPage } from './view-my-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMyBookingPageRoutingModule
  ],
  declarations: [ViewMyBookingPage]
})
export class ViewMyBookingPageModule {}
