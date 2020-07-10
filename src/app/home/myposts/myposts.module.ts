import { MyPostItemComponent } from './my-post-item/my-post-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypostsPageRoutingModule } from './myposts-routing.module';

import { MypostsPage } from './myposts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MypostsPageRoutingModule
  ],
  declarations: [MypostsPage, MyPostItemComponent]
})
export class MypostsPageModule { }
