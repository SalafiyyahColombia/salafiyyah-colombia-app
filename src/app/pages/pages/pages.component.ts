import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  sideBarOpen: boolean = true;
  toggleSideBar(value: boolean) {
    console.log(value)
    this.sideBarOpen = value;
  }
}
