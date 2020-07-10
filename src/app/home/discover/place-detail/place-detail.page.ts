import { CreateBookingComponent } from './../../../my-bookings/create-booking/create-booking.component';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Place } from './../../../services/place.model';
import { HomeService } from './../../../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  currentPlaceDetails: Place;

  constructor(
    private homeServeice: HomeService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramsMap => {
      if (!paramsMap.has('place-id')) {
        this.navCtrl.navigateBack(['/', 'home', 'home-tabs', 'discover']);
        return;
      }

      this.currentPlaceDetails = this.homeServeice.getOnePlace(paramsMap.get('place-id'));
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
        console.log('Sucessfully Booked with ' + mode);
      }
    })
  }

}
