import { loginAndSignUp } from './loginAndSignUp.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  logInForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private menuCtrl: MenuController
  ) { }


  ngOnInit() {
    this.logInForm = new FormGroup({
      'usernameOrEmail': new FormControl('', {
        validators: [Validators.required, Validators.email, loginAndSignUp.cannotContainSpace],
      }),
      'password': new FormControl('', {
        validators: Validators.required,
      })
    })
  }

  get userOrEmail() {
    return this.logInForm.get('usernameOrEmail');
  }
  get password() {
    return this.logInForm.get('password');
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  onLogIn() {
    this.loadingCtrl.create({
      keyboardClose: true,
      spinner: 'dots',
      message: 'Logging in...'
    }).then(loadingElement => {
      loadingElement.present();
      this.authService.login();
      setTimeout(() => {
        this.router.navigate(['/', 'home', 'home-tabs', 'discover']);
        loadingElement.dismiss();
        this.menuCtrl.enable(true);
      }, 500);
    });

    console.log(this.logInForm.value);

  }

  goToSignUpPage() {
    console.log("Going to Sign Up Page");
    this.router.navigate(['/', 'auth', 'sign-up']);
  }
}
