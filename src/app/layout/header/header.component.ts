import { AppUser } from './../../model/app-user';
import { AuthService } from './../../security/helpers/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appUser: AppUser
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.appUser$.subscribe(res => this.appUser=res)



  }
  logout() {
    this.authService.logout()
  }
}
