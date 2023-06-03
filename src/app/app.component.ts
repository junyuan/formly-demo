import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formly-demo';
  menus: MenuItem[] = [
    { label: 'Home', routerLink: '/home', routerLinkActiveOptions:{exact:true} },
    { label: 'Reactive Form', routerLink: '/reactive' },
    { label: 'Formly Form', routerLink: '/formly' }
  ]
}
