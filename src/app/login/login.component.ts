import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  isUserLoggedIn :boolean = StorageService.isUserLoggedIn();
  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService
  ){
    this.loginForm = this.formBuilder.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  });}

  ngOnInit(){
    this.router.events.subscribe(event =>{
      if(event.constructor.name === 'NavigationEnd'){
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
        this.isUserLoggedIn = StorageService.isUserLoggedIn();
      }
    })
  }

  login() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((res) => {
      console.log(res);

      // Condicional si es igual a nulo y crear el objeto user
      if (res.userId != null) {
        const user = { id: res.userId, role: res.userRole };
        
        // Llamando al StorageService
        // Verificar si el logueo corresponde a usuario, admin o ninguno con local storage
        StorageService.saveUser(user);
        StorageService.saveToken(res.jwt);
        
        if (StorageService.isAdminLoggedIn()) {
          this.router.navigate(['/libros']);
        } else if (StorageService.isUserLoggedIn()) {
          this.router.navigate(['/libros']);
          console.log("admin registrado con éxito");
        } else {
          let parrafoContraseña = document.querySelector<HTMLElement>('.parrafoContra')!;
          parrafoContraseña.style.display = 'block';
        }
      } else {
        let parrafoContraseña = document.querySelector<HTMLElement>('.parrafoContra')!;
        parrafoContraseña.style.display = 'block';
      }
    }, (error) => {
      let parrafoContraseña = document.querySelector<HTMLElement>('.parrafoContra')!;
      parrafoContraseña.style.display = 'block';
    });
  }

  logout(){
    StorageService.logout();
    this.router.navigate(['/login'])
}



}
