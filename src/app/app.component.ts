import { UserService } from './service/user.service';
import { Router } from '@angular/router';
import { AuthService } from './security/helpers/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService:UserService,auth: AuthService, router: Router) {
    auth.user$.subscribe((res: any) => {
      if (res) {
        userService.save(res)
        let returnUrl = sessionStorage.getItem("returnUrl")
        router.navigateByUrl(returnUrl)
      }
    })
  }
}
