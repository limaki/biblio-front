import { Component } from '@angular/core';
import { Libros } from '../../interface/libros';
import { LoginService } from '../../login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda-id',
  templateUrl: './busqueda-id.component.html',
  styleUrl: './busqueda-id.component.css'
})
export class BusquedaIdComponent {
  libro: Libros | null = null;
  id: any;
  error: string | null = null;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void { }

  buscar(): void {
    if (this.id !== null && this.id > 0) {
      this.loginService.getOneLibro(this.id).subscribe(
        (data: Libros) => {
          this.libro = data;
          this.error = null;
        },
        error => {
          this.libro = null;
          this.error = 'No se encontró el libro con ID ' + this.id;
          console.error('Error al obtener libro:', error);
        }
      );
    } else {
      this.error = 'Por favor, ingrese un ID válido.';
    }
  }
}
