import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(CommonModule)
  ]
};
