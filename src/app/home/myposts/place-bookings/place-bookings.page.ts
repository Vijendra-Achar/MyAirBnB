import { Subscription } from 'rxjs';
import { HomeService } from './../../../services/home.service';
import { Place } from './../../../services/place.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-bookings',
  templateUrl: './place-bookings.page.html',
  styleUrls: ['./place-bookings.page.scss'],
})
export class PlaceBookingsPage implements OnInit, OnDestroy {

  place: Place;
  placeSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (!params) {
        this.navCtrl.navigateBack(['/', 'home', 'home-tabs', 'myposts']);
        return;
      }

      this.homeService.getOnePlace(params.get('place-id')).subscribe(onePlace => {
        this.place = onePlace;
      })
    });
  }

  ngOnDestroy() {
    if (this.placeSubscription) {
      this.placeSubscription.unsubscribe();
    }
  }

}
