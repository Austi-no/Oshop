import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

 constructor(private authService:AuthService,private router:Router){}
  canActivate(route, state:RouterStateSnapshot){
    return this.authService.user$.pipe(map((res:any)=>{
      if(res) return true
      this.router.navigate(["/login"], {queryParams:{returnUrl:state.url}})
      return false
    }))
  }
  
}
