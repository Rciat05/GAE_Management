import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './Services/usuario.service';
import { LoginComponent } from "./login/login.component";
import { BrowserModule } from '@angular/platform-browser';
import { UsuariosComponent } from './usuarios-component/usuarios-component.component';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppComponent,
    LoginComponent,
    UsuariosComponent
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})

export class AppComponent {
  
}
