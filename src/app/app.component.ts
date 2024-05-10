import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserNameComponent } from './user-name/user-name.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { pathErrorInterceptor } from './interceptors/path-error.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserNameComponent,
    HomePageComponent,
    NavbarComponent, 
    NotFoundPageComponent, 
    AboutPageComponent,
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
