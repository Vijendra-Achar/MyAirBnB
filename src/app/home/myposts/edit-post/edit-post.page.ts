import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from './../../../services/place.model';
import { HomeService } from './../../../services/home.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage implements OnInit, OnDestroy {

  currentPlace: Place;
  currentPostEdit: FormGroup;
  currentPostSubscription: Subscription;

  constructor(
    private homeSerevice: HomeService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('place-id')) {
        this.navCtrl.navigateBack(['/', 'home', 'home-tabs', 'myposts']);
        return;
      }

      this.currentPostSubscription = this.homeSerevice.getOnePlace(paramMap.get('place-id')).subscribe(onePlace => {
        this.currentPlace = onePlace;
      })

      this.currentPostEdit = new FormGroup({
        'placeNameEdit': new FormControl(this.currentPlace.placeName, {
          validators: Validators.required
        }),
        'placeDescEdit': new FormControl(this.currentPlace.description, {
          validators: Validators.required
        }),
        'placeAddressEdit': new FormControl(this.currentPlace.address, {
          validators: Validators.required
        }),
        'placePricePerNightEdit': new FormControl(this.currentPlace.price, {
          validators: Validators.required
        }),
        'placeAvailabilityEdit': new FormGroup({
          'availableFromEdit': new FormControl(this.currentPlace.availableFrom, {
            validators: Validators.required
          }),
          'availabletillEdit': new FormControl(this.currentPlace.availableTill, {
            validators: Validators.required
          })
        })
      })

    });
  }

  get ePlaceName() {
    return this.currentPostEdit.get('placeNameEdit');
  }

  get ePlaceDesc() {
    return this.currentPostEdit.get('placeDescEdit');
  }

  get ePlaceAdd() {
    return this.currentPostEdit.get('placeAddressEdit');
  }

  get ePlacePrice() {
    return this.currentPostEdit.get('placePricePerNightEdit');
  }

  get ePlaceAvailableFrom() {
    return this.currentPostEdit.get('placeAvailabilityEdit.availableFromEdit');
  }
  get ePlaceAvailableto() {
    return this.currentPostEdit.get('placeAvailabilityEdit.availabletillEdit');
  }

  onUpdateOffer() {
    console.log("done");

    this.loadingCtrl.create({
      message: 'Updating Details...'
    }).then(updateEl => {
      updateEl.present();
      this.homeSerevice.updatePlacePost(
        this.currentPlace.id,
        this.ePlaceName.value,
        this.ePlaceDesc.value,
        this.ePlaceAdd.value,
        this.ePlacePrice.value,
        this.ePlaceAvailableFrom.value,
        this.ePlaceAvailableto.value)
        .subscribe(() => {
          updateEl.dismiss();
          console.log(this.currentPostEdit.value);
          this.currentPostEdit.reset();
          this.router.navigate(['/', 'home', 'home-tabs', 'myposts']);
        });


    })


  }

  ngOnDestroy() {
    if (this.currentPostSubscription) {
      this.currentPostSubscription.unsubscribe();
    }
  }


}
