import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formly-demo';
  menus: MenuItem[] = [
    { label: 'Home', routerLink: '/' },
    { label: 'Reactive Form', routerLink: '/reactive' }
  ]
}
