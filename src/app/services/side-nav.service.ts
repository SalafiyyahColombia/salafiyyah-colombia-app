import { Injectable } from '@angular/core';
import {MatDrawer, MatSidenav} from "@angular/material/sidenav";

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private drawer!: MatDrawer;

  setSidenav(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

  toggle(): void {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }
}
