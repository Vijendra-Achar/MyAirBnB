import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home-tabs',
    component: HomePage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
          },
          {
            path: ':place-id',
            loadChildren: () => import('./discover/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
          },
          {
            path: '',
            redirectTo: '/home/home-tabs/discover',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'myposts',
        children: [
          {
            path: '',
            loadChildren: () => import('./myposts/myposts.module').then(m => m.MypostsPageModule)
          },
          {
            path: 'new-post',
            loadChildren: () => import('./myposts/new-post/new-post.module').then(m => m.NewPostPageModule)
          },
          {
            path: 'edit-post/:place-id',
            loadChildren: () => import('./myposts/edit-post/edit-post.module').then(m => m.EditPostPageModule)
          },
          {
            path: ':place-id',
            loadChildren: () => import('./myposts/place-bookings/place-bookings.module').then(m => m.PlaceBookingsPageModule)
          }
        ]
      },
      {
        path: 'news',
        loadChildren: () => import('./news/news-routing.module').then(m => m.NewsPageRoutingModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/home-tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
