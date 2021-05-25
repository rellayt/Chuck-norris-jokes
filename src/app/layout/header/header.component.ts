import { Component, OnInit } from '@angular/core';
import { NAVIGATION_ITEMS } from 'src/app/core/config/navigation';
import { navigationItem } from '../../core/models/navigation-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navigationItems: navigationItem[] = NAVIGATION_ITEMS

  constructor() { }

}
