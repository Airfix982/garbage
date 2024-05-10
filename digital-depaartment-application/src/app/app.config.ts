import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';
import { pathErrorInterceptor } from './interceptors/path-error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    [{
      provide: HTTP_INTERCEPTORS,
      useClass: pathErrorInterceptor,
      multi: true
    }],
    importProvidersFrom(HttpClientModule),
    provideRouter(routes)
  ]
};
