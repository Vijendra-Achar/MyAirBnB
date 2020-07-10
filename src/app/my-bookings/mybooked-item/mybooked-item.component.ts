import { Bookings } from './../../services/booking.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mybooked-item',
  templateUrl: './mybooked-item.component.html',
  styleUrls: ['./mybooked-item.component.scss'],
})
export class MybookedItemComponent implements OnInit {

  @Input() bookingItem: Bookings;

  constructor() { }

  ngOnInit() { }

  getDate() {
    return new Date();
  }
}
