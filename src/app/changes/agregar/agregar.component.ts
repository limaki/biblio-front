import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../libros.service'; // Asegúrate de usar el servicio correcto
import { Libros } from '../../interface/libros';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class AgregarComponent implements OnInit {

  constructor(
    private  loginService: LoginService, // Usa el servicio de libros
    private router: Router
  ) {}

  ngOnInit(): void {
    // Aquí puedes cargar datos iniciales si es necesario
  }

  nuevoLibro: Libros = {
    id: '',
    isbn: '',
    titulo: '',
    autor: '',
    editorial: '',
    anio: 0,
    estado: '',
    prestamos: 0,
    usuarioId: 0,
    vendedorId: 0
  };

  agregarlibro(): void {
    this.loginService.addLibro(this.nuevoLibro).subscribe(res => {
      console.log('Libro agregado:', res); // Agrega un console.log para depuración
      this.router.navigate(['/libros']);
    }, error => {
      console.error('Error al agregar libro:', error); // Manejo de errores
    });
  }
}