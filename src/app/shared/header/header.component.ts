import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {SideNavService} from "../../services/side-nav.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private sidenavService: SideNavService
  ) {
  }

  toggleSideBar(): void {
    this.sidenavService.toggle()
  }
}
