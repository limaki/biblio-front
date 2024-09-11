import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { Libros } from '../../interface/libros';

@Component({
  selector: 'app-busqueda-isbn',
  templateUrl: './busqueda-isbn.component.html',
  styleUrl: './busqueda-isbn.component.css'
})
export class BusquedaIsbnComponent {

  libro: Libros | null = null;
  isbn: string = '';
  error: string | null = null;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void { }

  buscar(): void {
    if (this.isbn.trim() !== '') {
      this.loginService.getByIsbn(this.isbn).subscribe(
        (data: Libros) => {
          this.libro = data;
          this.error = null;
        },
        error => {
          this.libro = null;
          this.error = 'No se encontró el libro con ISBN ' + this.isbn;
          console.error('Error al obtener libro:', error);
        }
      );
    } else {
      this.error = 'Por favor, ingrese un ISBN válido.';
    }
  }

}
