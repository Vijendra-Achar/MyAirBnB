import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookingService } from './../services/booking.service';
import { Bookings } from './../services/booking.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';

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
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.bookingDataSub = this.bookingService.bookingsData.subscribe(data => {
      console.log(data);
      this.fetchedBookings = data;
    });
  }

  onCancelBooking(bookingId: string, itemSlider: IonItemSliding) {
    this.loadingCtrl.create({ message: "Cancelling..." }).then(loadingEl => {
      loadingEl.present();
      console.log('Canceled - ' + bookingId);
      this.bookingService.cancelBookings(bookingId).subscribe(() => {
        loadingEl.dismiss();
        itemSlider.close();
      });
    })


  }

  getDate() {
    return new Date();
  }

  viewBookedPlace(bookingId) {
    this.router.navigate(['/', 'my-bookings', 'view-my-booking', bookingId]);
  }

  ngOnDestroy() {
    if (this.bookingDataSub) {
      this.bookingDataSub.unsubscribe();
    }
  }
}
