import { BookingService } from './../../../services/booking.service';
import { Subscription } from 'rxjs';
import { CreateBookingComponent } from './../../../my-bookings/create-booking/create-booking.component';
import { NavController, ModalController, ActionSheetController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Place } from './../../../services/place.model';
import { HomeService } from './../../../services/home.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {

  currentPlaceDetails: Place;
  currentPlaceSubscription: Subscription;

  constructor(
    private homeServeice: HomeService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private bookingService: BookingService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramsMap => {
      if (!paramsMap.has('place-id')) {
        this.navCtrl.navigateBack(['/', 'home', 'home-tabs', 'discover']);
        return;
      }

      this.currentPlaceSubscription = this.homeServeice.getOnePlace(paramsMap.get('place-id')).subscribe(onePlace => {
        this.currentPlaceDetails = onePlace;
      })
    })
  }

  onBookNow() {

    this.actionSheetCtrl.create({
      header: 'Choose your Prefered Suite',
      buttons: [
        {
          text: 'Normal',
          handler: () => {
            this.openBookingModal('normal')
          }
        },
        {
          text: 'Deluxe',
          handler: () => {
            this.openBookingModal('deluxe');
          }
        },
        {
          text: 'Cancel',
          role: 'destructive'
        }
      ]
    }).then(actionSheetElement => {
      actionSheetElement.present();
    })
  }

  openBookingModal(mode: 'normal' | 'deluxe') {
    console.log(mode);
    this.modalCtrl.create({
      component: CreateBookingComponent, componentProps: {
        currentPlace: this.currentPlaceDetails,
        bookingMode: mode
      }
    }).then(theRes => {
      theRes.present();
      return theRes.onDidDismiss();
    }).then(bookingRes => {
      console.log(bookingRes.data, bookingRes.role);
      if (bookingRes.role === 'booking confirmed') {
        this.loadingCtrl.create({ message: "Booking! Please Wait..." }).then(
          loadingEl => {
            loadingEl.present();
            const bookingData = bookingRes.data.bookingData;
            this.bookingService.addBooking(
              this.currentPlaceDetails.id,
              this.currentPlaceDetails.placeName,
              this.currentPlaceDetails.imageUrl,
              bookingData.choosenSuite,
              this.currentPlaceDetails.price,
              this.currentPlaceDetails.address,
              bookingData.fullName,
              bookingData.emailAddress,
              bookingData.phoneNumber,
              bookingData.numberOfGuests,
              bookingData.durationOfStay.stayFrom,
              bookingData.durationOfStay.stayTill,
              bookingData.totalDaysOfStay,
              bookingData.totalRent).subscribe(() => {
                loadingEl.dismiss();
              });
          })
      }
    })
  }

  ngOnDestroy() {
    if (this.currentPlaceSubscription) {
      this.currentPlaceSubscription.unsubscribe();
    }
  }

}
