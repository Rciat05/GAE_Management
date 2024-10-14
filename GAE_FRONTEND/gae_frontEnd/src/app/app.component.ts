import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [LoginComponent],
  })
  export class AppComponent {
    title = 'GAE_FRONTEND';
  }
