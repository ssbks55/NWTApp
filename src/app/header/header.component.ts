import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerTitle: string = 'Default Title'; // Default title

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Listen for route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateHeaderTitle();
    });
  }

  updateHeaderTitle(): void {
    const currentRoute = this.router.url;

    // Update headerTitle based on the route
    switch (currentRoute) {
      case '/dashboard':
        this.headerTitle = 'Home';
        break;
      case '/profile':
        this.headerTitle = 'Profile';
        break;
      case '/settings':
        this.headerTitle = 'Settings';
        break;
      case '/help':
        this.headerTitle = 'Help';
        break;
      case '/networth-detail:id':
        this.headerTitle = 'Details';
        break;
      default:
        this.headerTitle = '';
        break;
    }
  }
}
