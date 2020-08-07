import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Place } from './../../services/place.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input('currentPlace') currentPlace: Place;
  @Input('bookingMode') bookingMode: string;

  constructor(private modalCtrl: ModalController) { }

  todayDate: Date;
  bookingDetails: FormGroup;
  totalPrice: number = 0;

  ngOnInit() {
    this.todayDate = new Date();

    this.bookingDetails = new FormGroup({
      'nameOfPerson': new FormControl('', {
        validators: [Validators.required, Validators.minLength(5)]
      }),
      'eMailOfPerson': new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      'phoneNumberOfPerson': new FormControl('', {
        validators: [Validators.required, Validators.min(1000000000), Validators.max(99999999999)]
      }),
      'numberOfGuests': new FormControl('', {
        validators: Validators.required
      }),
      'lengthOfStay': new FormGroup({
        'stayFrom': new FormControl('', {
          validators: Validators.required
        }),
        'stayTill': new FormControl('', {
          validators: Validators.required
        })
      })
    })
  }

  get personName() {
    return this.bookingDetails.get('nameOfPerson');
  }

  get personEmail() {
    return this.bookingDetails.get('eMailOfPerson');
  }

  get personPhNumber() {
    return this.bookingDetails.get('phoneNumberOfPerson');
  }

  get numberOfGuests() {
    return this.bookingDetails.get('numberOfGuests');
  }

  get stayFrom() {
    return this.bookingDetails.get('lengthOfStay.stayFrom');
  }

  get stayTill() {
    return this.bookingDetails.get('lengthOfStay.stayTill');
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'canceled');
  }

  totalDaysOfStay(): number {

    const datesFromAndTo = {
      'fromYear': new Date(this.stayFrom.value).getFullYear(),
      'fromMon': new Date(this.stayFrom.value).getMonth(),
      'fromDay': new Date(this.stayFrom.value).getDate(),
      'toYear': new Date(this.stayTill.value).getFullYear(),
      'toMon': new Date(this.stayTill.value).getMonth(),
      'toDay': new Date(this.stayTill.value).getDate()
    }

    const totalDaysOfStay = Math.floor((Date.UTC(datesFromAndTo.toYear, datesFromAndTo.toMon, datesFromAndTo.toDay) - Date.UTC(datesFromAndTo.fromYear, datesFromAndTo.fromMon, datesFromAndTo.fromDay)) / (1000 * 60 * 60 * 24)) + 1;

    if (totalDaysOfStay > 0) { return totalDaysOfStay }
    else { return 0 }
  }


  calcTotalPrice(): number {

    let totalPrice = 0;
    let totalDaysOfStayLocal = this.totalDaysOfStay();

    totalPrice = totalDaysOfStayLocal * this.currentPlace.price;

    if (totalPrice > 0) { return totalPrice }
    else { return 0 }
  }

  confirmBooking() {
    this.modalCtrl.dismiss({
      bookingData: {
        'placeName': this.currentPlace.placeName,
        'price': this.currentPlace.price,
        'fullName': this.personName.value,
        'emailAddress': this.personEmail.value,
        'phoneNumber': this.personPhNumber.value,
        'numberOfGuests': this.numberOfGuests.value,
        'durationOfStay': {
          'stayFrom': new Date(this.stayFrom.value),
          'stayTill': new Date(this.stayTill.value)
        },
        'totalDaysOfStay': this.totalDaysOfStay(),
        'totalRent': this.calcTotalPrice(),
        'choosenSuite': this.bookingMode,
        'placeAdress': this.currentPlace.address
      }
    }, 'booking confirmed');

  }

}
