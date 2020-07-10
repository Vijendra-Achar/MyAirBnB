import { loginAndSignUp } from './../loginAndSignUp.validators';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signUpForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'fullName': new FormControl('', {
        validators: [Validators.required, Validators.minLength(5)],
      }),
      'eMailAddress': new FormControl('', {
        validators: [Validators.required, loginAndSignUp.cannotContainSpace],
      }),
      'passwordGroup': new FormGroup({
        'password': new FormControl('', {
          validators: [Validators.required, Validators.minLength(8)],
        }),
        'reTypedPassword': new FormControl('', {
          validators: [Validators.required, Validators.minLength(8)],
        })
      }, loginAndSignUp.confirmPassword)
    });
  }

  get fullName() {
    return this.signUpForm.get('fullName');
  }
  get emailAdd() {
    return this.signUpForm.get('eMailAddress');
  }
  get password() {
    return this.signUpForm.get('passwordGroup.password');
  }
  get rePassword() {
    return this.signUpForm.get('passwordGroup.reTypedPassword');
  }
  get passGroup() {
    return this.signUpForm.get('passwordGroup')
  }

  signUp() {
    console.log(this.signUpForm.value);
  }

}
