import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm!:FormGroup;

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router:Router ){

    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required]],
      nombreCompleto: [null, [Validators.required]],
      dni: [null, [Validators.required]],
      identificacion: [null, [Validators.required]],
    })
  }

  registrar() {
    if (this.signupForm.valid && this.signupForm.value.password === this.signupForm.value.checkPassword) {
      console.log(this.signupForm.value);
      this.authService.register(this.signupForm.value).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/login']);
      });
    } else {
      console.error('Las contraseñas no coinciden o el formulario no es válido');
      let parrafoContraseña = document.querySelector<HTMLElement>('.parrafoContra')!;

      parrafoContraseña.style.display = 'block';
    }
  }



}
