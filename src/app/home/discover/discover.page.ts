import { Place } from './../../services/place.model';
import { HomeService } from './../../services/home.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  thePlaces: Place[];
  placesSubscription: Subscription;

  constructor(private homeServeice: HomeService) {}

  ngOnInit() {
    this.placesSubscription = this.homeServeice.getPlaces.subscribe((places) => {
      this.thePlaces = places;
    });
  }

  ngOnDestroy() {
    if (this.placesSubscription) {
      this.placesSubscription.unsubscribe();
    }
  }
}
