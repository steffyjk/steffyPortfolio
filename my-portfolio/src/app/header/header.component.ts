import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      { label: 'Home', routerLink: '/' },
      { label: 'Projects', routerLink: '/projects' },
      { label: 'Contact', routerLink: '/contact' }
    ];
  }
}
