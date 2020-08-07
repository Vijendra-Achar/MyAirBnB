import { take, tap, delay } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';
import { Bookings } from './booking.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingsMade = new BehaviorSubject<Bookings[]>([]);

  constructor(private authService: AuthService) { }

  get bookingsData() {
    return this.bookingsMade.asObservable();
  }

  addBooking(
    placeId: string,
    placeName: string,
    placeImage: string,
    placeSuite: string,
    pricePerNight: number,
    placeAddress: string,
    personName: string,
    personEmail: string,
    personPhNumber: number,
    personNoOfGuests: number,
    bookingDateFrom: Date,
    bookingDateTill: Date,
    bookingDays: number,
    totalPrice: number
  ) {
    let bookingId = 'booking' + Math.floor(Math.random() * 100);
    const newBooking = new Bookings(
      bookingId,
      placeId,
      placeName,
      placeImage,
      placeSuite,
      pricePerNight,
      placeAddress,
      personName,
      this.authService.getUserId,
      personEmail,
      personPhNumber,
      personNoOfGuests,
      bookingDateFrom,
      bookingDateTill,
      bookingDays,
      totalPrice
    );

    return this.bookingsData.pipe(
      take(1),
      delay(2000),
      tap(newBookingData => {
        this.bookingsMade.next(newBookingData.concat(newBooking));
      })
    );
  }

  cancelBookings() {

  }
}
