import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { pathErrorInterceptor } from './interceptors/path-error.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent, 
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:
  [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: pathErrorInterceptor,
      multi: true
    }
  ]
})
export class AppComponent {
  title = 'digital-depaartment-application';
}
