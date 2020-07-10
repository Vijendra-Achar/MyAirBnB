import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Place } from './../../services/place.model';
import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.page.html',
  styleUrls: ['./myposts.page.scss'],
})
export class MypostsPage implements OnInit {

  myOfferPosts: Place[];

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.myOfferPosts = this.homeService.postedPlacesGet();
  }

  onEditPlace(placeId: string, itemSlider: IonItemSliding) {

    this.router.navigate(['/', 'home', 'home-tabs', 'myposts', 'edit-post', placeId]);
    console.log('Going to Edit Place of ' + placeId);
    itemSlider.close();
  }

  onDeletePlace(placeId: string, itemSlider: IonItemSliding) {
    console.log('Deleted ' + placeId);
    itemSlider.close();
  }
}
