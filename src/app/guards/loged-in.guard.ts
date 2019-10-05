import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogedInGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}


 canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.authService.user.getValue() != null ? true : this.router.parseUrl('/login');
  }
}
