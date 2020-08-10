import { BookingService } from './../../services/booking.service';
import { Bookings } from './../../services/booking.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-my-booking',
  templateUrl: './view-my-booking.page.html',
  styleUrls: ['./view-my-booking.page.scss'],
})
export class ViewMyBookingPage implements OnInit {

  thisBookedPlaceId: string;
  currentBookedPlace: Bookings;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      this.thisBookedPlaceId = data.get('bookingId');
    })

    this.bookingService.getOneBooking(this.thisBookedPlaceId).subscribe(bookedPlace => {
      this.currentBookedPlace = bookedPlace;
    })
  }
}
