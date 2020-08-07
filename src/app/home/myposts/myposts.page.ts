import { Subscription } from 'rxjs';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Place } from './../../services/place.model';
import { HomeService } from './../../services/home.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.page.html',
  styleUrls: ['./myposts.page.scss'],
})
export class MypostsPage implements OnInit, OnDestroy {

  myOfferPosts: Place[];
  myOfferSubcription: Subscription;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.myOfferSubcription = this.homeService.getPlaces.subscribe(places => {
      this.myOfferPosts = places;
    });
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

  ngOnDestroy() {
    if (this.myOfferSubcription) {
      this.myOfferSubcription.unsubscribe();
    }
  }
}
