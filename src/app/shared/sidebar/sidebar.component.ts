import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {SidebarListInterface} from "../../Interfaces/sidebar-list.interface";
import {MatDrawer, MatSidenav} from "@angular/material/sidenav";
import {SideNavService} from "../../services/side-nav.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('drawer', { static: false }) public drawer!: MatDrawer;

  constructor(
    private sidenavService: SideNavService
  ) {
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.drawer);
  }

  navLinks: SidebarListInterface[] = [
    {text: 'Quienes somos', url: 'about-us'},
    {text: 'Sitios confiables', url: 'trustable-sources'},
    {text: 'Indice de temas', url: 'topic-index'},
    {text: 'Descargar PDfs', url: 'pdf'},
    {text: 'Videos', url: 'videos'},
    {text: 'Contáctenos', url: 'contact-us'},
  ];
}
