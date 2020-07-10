import { MybookedItemComponent } from './mybooked-item/mybooked-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBookingsPageRoutingModule } from './my-bookings-routing.module';

import { MyBookingsPage } from './my-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MyBookingsPageRoutingModule
  ],
  declarations: [MyBookingsPage, MybookedItemComponent]
})
export class MyBookingsPageModule { }
