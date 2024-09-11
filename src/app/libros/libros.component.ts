import { Component, OnInit } from '@angular/core';
import { Libros } from '../interface/libros';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {

  isUserLoggedIn :boolean = StorageService.isUserLoggedIn();
  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();

  libros:Libros[] = [];

  imagen:string ='../../assets/img/digital-library-logo-design-1c96fa.jpg'

  ngOnInit(): void {

    this.getLibros();
    //chequear el admin y user
    this.getLibrosAdmin()

    this.router.events.subscribe(event =>{
      if(event.constructor.name === 'NavigationEnd'){
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
        this.isUserLoggedIn = StorageService.isUserLoggedIn();
      }
    })
    
  }

  constructor(private loginService:LoginService,
              private router:Router){}


  


      logout(){
         StorageService.logout();
              this.router.navigate(['/login'])
      }

  getLibros(){
    this.loginService.getLibros().subscribe(res =>{ this.libros = res});
  }

  getLibrosAdmin(){
    this.loginService.getLibrosAdmin().subscribe(res =>{ this.libros = res});
  }

  deleteLibro(id:string){

    this.loginService.deleteLibro(id).subscribe( res => { this.ngOnInit; window.location.reload() })
     
    }

}
