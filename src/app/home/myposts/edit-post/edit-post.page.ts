import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Place } from './../../../services/place.model';
import { HomeService } from './../../../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage implements OnInit {

  currentPlace: Place;
  currentPostEdit: FormGroup;

  constructor(
    private homeSerevice: HomeService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {



    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('place-id')) {
        this.navCtrl.navigateBack(['/', 'home', 'home-tabs', 'myposts']);
        return;
      }
      this.currentPlace = this.homeSerevice.getOnePlace(paramMap.get('place-id'));

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
          'availableFromEdit': new FormControl('', {
            validators: Validators.required
          }),
          'availabletillEdit': new FormControl('', {
            validators: Validators.required
          })
        })
      })

    });
  }

  onUpdateOffer() {
    console.log("done");
    console.log(this.currentPostEdit.value);
  }
}
