import { Component } from '@angular/core';
import { Libros } from '../../interface/libros';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-busqueda-title',
  templateUrl: './busqueda-title.component.html',
  styleUrl: './busqueda-title.component.css'
})
export class BusquedaTitleComponent {

  titulo: string = '';
  libros: Libros[] = [];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void { }

  buscar(): void {
    if (this.titulo.trim() !== '') {
      this.loginService.searchByTitulo(this.titulo).subscribe(
        (data: Libros[]) => {
          this.libros = data;
        },
        error => {
          console.error('Error al buscar libros:', error);
        }
      );
    }
  }

}
