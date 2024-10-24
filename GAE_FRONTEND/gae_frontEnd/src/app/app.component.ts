import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterModule, MatSidenavModule, MatButtonModule, CommonModule],

})
export class AppComponent {
  title = 'GAE_FRONTEND';
}
