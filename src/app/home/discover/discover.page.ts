import { Place } from './../../services/place.model';
import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  thePlaces: Place[];

  constructor(private homeServeice: HomeService) { }

  ngOnInit() {
    this.thePlaces = this.homeServeice.postedPlacesGet();
  }
}
