import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterNames } from 'src/app/core/const/enum';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  page: string = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.page = this.router.url.replace("/", "");

    if (this.page == RouterNames.MICE) {
      localStorage.setItem("isMiceActive", "active");
    }
  }
}
