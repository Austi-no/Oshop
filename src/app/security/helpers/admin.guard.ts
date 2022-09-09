import { AngularFireObject } from '@angular/fire/compat/database';
import { UserService } from './../../service/user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService, private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.authService.appUser$
      .pipe(
        map(appUser => appUser.isAdmin)
      )
  }

}
