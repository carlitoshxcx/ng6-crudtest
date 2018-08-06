import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  navUrl: string = '';

  constructor(private router: Router) { 
    router.events.subscribe((_: NavigationEnd) => {
      if (_.url !== undefined) { this.navUrl = _.url }
    } );
  }

  ngOnInit() { }

}