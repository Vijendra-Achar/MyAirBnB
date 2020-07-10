import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MypostsPage } from './myposts.page';

const routes: Routes = [
  {
    path: '',
    component: MypostsPage
  },
  {
    path: 'new-post',
    loadChildren: () => import('./new-post/new-post.module').then( m => m.NewPostPageModule)
  },
  {
    path: 'edit-post',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
  },
  {
    path: 'place-bookings',
    loadChildren: () => import('./place-bookings/place-bookings.module').then( m => m.PlaceBookingsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypostsPageRoutingModule {}
