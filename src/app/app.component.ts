import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  navUrl: string = '';

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => {
      if (_.url !== undefined) { this.navUrl = _.url }
    });
  }
  
}
