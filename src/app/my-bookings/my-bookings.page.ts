import { BookingService } from './../services/booking.service';
import { Bookings } from './../services/booking.model';
import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.page.html',
  styleUrls: ['./my-bookings.page.scss'],
})
export class MyBookingsPage implements OnInit {

  fetchedBookings: Bookings[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.fetchedBookings = this.bookingService.bookingsData;
  }

  onCancelBooking(bookingId: string, itemSlider: IonItemSliding) {
    console.log('Canceled - ' + bookingId);
    itemSlider.close();
  }

  getDate() {
    return new Date();
  }
}
