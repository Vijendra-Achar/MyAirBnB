import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userIsAuthenticated: boolean = true;

  constructor() { }

  login() {
    this.userIsAuthenticated = true;
    console.log('Logged In');
  }

  logout() {
    this.userIsAuthenticated = false;
    console.log('Logged Out');
  }

  get authStatus() {
    return this.userIsAuthenticated;
  }
}
