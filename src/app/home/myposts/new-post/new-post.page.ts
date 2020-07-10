import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage implements OnInit {

  newPost: FormGroup;

  constructor() { }

  ngOnInit() {
    this.newPost = new FormGroup({

      'placeName': new FormControl('', {
        validators: [Validators.required],
      }),
      'placeDesc': new FormControl('', {
        validators: [Validators.required, Validators.minLength(20)],
      }),
      'placeAddress': new FormControl('', {
        validators: [Validators.required, Validators.minLength(20)],
      }),
      'placePricePerNight': new FormControl('', {
        validators: [Validators.required, Validators.min(0)],
      }),

      'placeAvailability': new FormGroup({
        'availableFrom': new FormControl('', {
          validators: [Validators.required],
        }),
        'availabletill': new FormControl('', {
          validators: Validators.required,
        })
      })
    })
  }

  get placeName() {
    return this.newPost.get('placeName');
  }
  get placeDesc() {
    return this.newPost.get('placeDesc');
  }
  get placeAdd() {
    return this.newPost.get('placeAddress');
  }
  get placePrice() {
    return this.newPost.get('placePricePerNight');
  }
  get placeAvailableFrom() {
    return this.newPost.get('placeAvailability.availableFrom');
  }
  get placeAvailabletill() {
    return this.newPost.get('placeAvailability.availabletill');
  }

  onCreatePost() {
    console.log(this.newPost.value);
  }

}
