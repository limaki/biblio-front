import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LibrosComponent } from './libros/libros.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './changes/editar/editar.component';
import { AgregarComponent } from './changes/agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { BusquedaTitleComponent } from './busqueda/busqueda-title/busqueda-title.component';
import { BusquedasComponent } from './busquedas/busquedas.component';
import { BusquedaIdComponent } from './busqueda/busqueda-id/busqueda-id.component';
import { BusquedaIsbnComponent } from './busqueda/busqueda-isbn/busqueda-isbn.component';
import { DetallesComponent } from './detalles/detalles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LibrosComponent,
    EditarComponent,
    AgregarComponent,
    SignupComponent,
    BusquedaTitleComponent,
    BusquedasComponent,
    BusquedaIdComponent,
    BusquedaIsbnComponent,
    DetallesComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
