import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { Libros } from '../interface/libros';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit{

  ngOnInit(): void {
    this.getOneLibro();
    this.getOneLibroAdmin();
  }

  id:any


  detallesLibro: Libros = {id:'',
                      isbn:'',
                      titulo:'',
                      autor:'',
                      editorial:'',
                      anio:0,
                      estado:'',
                      prestamos:0,
                      usuarioId:0,
                      vendedorId:0
 }

  constructor(private activateRoute:ActivatedRoute,
              private loginService: LoginService
  ){

  }

  getOneLibro(){

    this.id = this.activateRoute.snapshot.paramMap.get('id')
  
    this.loginService.getOneLibroUser(this.id).subscribe(res => { this.detallesLibro = res})
   
  
  }
  getOneLibroAdmin(){
    this.id = this.activateRoute.snapshot.paramMap.get('id')
    this.loginService.getOneLibro(this.id).subscribe(res => { this.detallesLibro = res})

  }

}
