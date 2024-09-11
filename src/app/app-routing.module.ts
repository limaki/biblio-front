import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LibrosComponent } from './libros/libros.component';
import { EditarComponent } from './changes/editar/editar.component';
import { AgregarComponent } from './changes/agregar/agregar.component';
import { SignupComponent } from './signup/signup.component';
import { BusquedasComponent } from './busquedas/busquedas.component';
import { BusquedaTitleComponent } from './busqueda/busqueda-title/busqueda-title.component';
import { BusquedaIdComponent } from './busqueda/busqueda-id/busqueda-id.component';
import { BusquedaIsbnComponent } from './busqueda/busqueda-isbn/busqueda-isbn.component';
import { DetallesComponent } from './detalles/detalles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, title: 'para loguearse con usuario y contraseña y acceder al sitio'},
  {path: 'signup', component: SignupComponent, title: 'si no tenes cuenta podes registrarte'},
  {path: 'libros', component: LibrosComponent, title: 'Nuestro catalogo de libros'},
  {path: 'editar/:id', component: EditarComponent, title: 'editar libro'},
  {path: 'agregar', component: AgregarComponent, title: 'agregar libro'},
  {path: 'detalle/:id', component: DetallesComponent, title: 'detalles del libro'},

  {path:'busqueda', component: BusquedasComponent, title: 'buscar entre libros'},
  {path: 'busquedaTitle', component: BusquedaTitleComponent, title: 'buscar entre libros por titulo'},
  {path: 'busquedaId', component: BusquedaIdComponent, title: 'buscar entre libros por id'},
  {path: 'busquedaIsbn', component: BusquedaIsbnComponent, title: 'buscar entre libros por Isbn'},
  {path: 'usuarios', component: UsuariosComponent, title: 'usuarios registrados en el sitio web'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
