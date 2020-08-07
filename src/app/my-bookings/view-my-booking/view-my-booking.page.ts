import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-my-booking',
  templateUrl: './view-my-booking.page.html',
  styleUrls: ['./view-my-booking.page.scss'],
})
export class ViewMyBookingPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      console.log(data);
    })
  }

}
