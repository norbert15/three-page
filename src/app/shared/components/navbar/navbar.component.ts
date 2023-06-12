import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterNames } from 'src/app/core/const/enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menus = [
    {
      routerName: RouterNames.DOGS,
      icon: 'fas fa-dog'
    },
    {
      routerName: RouterNames.CATS,
      icon: 'fas fa-cat'
    },
    {
      routerName: RouterNames.MICE,
      icon: 'fas fa-mouse'
    }
  ];

  constructor(private router: Router) {}

  isCatActive(name: string): boolean {
    if (name === RouterNames.CATS) {
      return localStorage.getItem("isMiceActive") ? false : true;
    }

    return false 
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }
}