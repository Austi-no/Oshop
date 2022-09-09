import { UserService } from './../../service/user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import * as firebase from "firebase/compat/app"
import { Observable, switchMap, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from 'src/app/model/app-user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.default.User>

  constructor(private afAuth: AngularFireAuth, private userService: UserService, private route: ActivatedRoute) {
    this.user$ = this.afAuth.authState
  }
  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/"
    sessionStorage.setItem("returnUrl", returnUrl)
    this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider())



  }
  logout() {
    this.afAuth.signOut()
  }
  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(switchMap(user => {
      if (user) {
        return this.userService.get(user?.uid).valueChanges();
      }
      return of(null)
    }))
  }

}
