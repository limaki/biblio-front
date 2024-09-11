

import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../libros.service';
import { Libros } from '../../interface/libros';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

  constructor(
    private loginService: LoginService,
    private router : Router,
    private activateRoute: ActivatedRoute
){}


ngOnInit(): void {
  this.getOneLibro()
}


id:any ='';

EditarLibro: Libros = {id:'',
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


 agregarlibro(){
  this.loginService.updateLibro(this.id, this.EditarLibro).subscribe(res =>{
    this.EditarLibro = res;this.router.navigate(['/libros'])
  })
 }



 getOneLibro(){

  this.id = this.activateRoute.snapshot.paramMap.get('id')

  this.loginService.getOneLibro(this.id).subscribe(res => { this.EditarLibro = res})
 

}
}
