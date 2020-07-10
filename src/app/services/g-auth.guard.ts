import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GAuthGuard implements CanLoad {

  constructor(
    private authSevice: AuthService,
    private router: Router
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean {

    if (!this.authSevice.authStatus) {
      this.router.navigate(['/', 'auth']);
    }

    return this.authSevice.authStatus;
  }
}
