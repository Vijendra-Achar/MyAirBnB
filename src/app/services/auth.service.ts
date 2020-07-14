import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userIsAuthenticated: boolean = true;
  private userId: string = 'user@1';

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

  get getUserId() {
    return this.userId;
  }
}
