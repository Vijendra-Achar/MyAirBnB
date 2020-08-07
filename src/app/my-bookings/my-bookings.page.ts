import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookingService } from './../services/booking.service';
import { Bookings } from './../services/booking.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.page.html',
  styleUrls: ['./my-bookings.page.scss'],
})
export class MyBookingsPage implements OnInit, OnDestroy {

  fetchedBookings: Bookings[];
  bookingDataSub: Subscription;

  constructor(
    private bookingService: BookingService,
    private router: Router) { }

  ngOnInit() {
    this.bookingDataSub = this.bookingService.bookingsData.subscribe(data => {
      console.log(data);
      this.fetchedBookings = data;
    });
  }

  onCancelBooking(bookingId: string, itemSlider: IonItemSliding) {
    console.log('Canceled - ' + bookingId);
    itemSlider.close();
  }

  getDate() {
    return new Date();
  }



  ngOnDestroy() {
    if (this.bookingDataSub) {
      this.bookingDataSub.unsubscribe();
    }
  }
}
