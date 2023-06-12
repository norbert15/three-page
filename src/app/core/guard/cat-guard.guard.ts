import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterNames } from '../const/enum';

@Injectable({
  providedIn: 'root'
})
export class CatGuard {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (!localStorage.getItem("isMiceActive")) {
        this.router.navigate([RouterNames.HOME]);
      }

      return true;
  }

  
}
