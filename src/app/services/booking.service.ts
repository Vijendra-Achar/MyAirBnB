import { Bookings } from './booking.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingsMade: Bookings[] = [
    new Bookings(
      'abc1',
      'place1',
      'The Beach House',
      'UserId1',
      'Username',
      20
    ),
    new Bookings(
      'abc2',
      'place2',
      'The Hill View',
      'userId2',
      'UserName2',
      13
    )
  ]

  constructor() { }

  get bookingsData() {
    return [...this.bookingsMade];
  }
}
