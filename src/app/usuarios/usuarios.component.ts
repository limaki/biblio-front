import { Component } from '@angular/core';
import { Users } from '../interface/users';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  users: Users[] = [];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loginService.getUsers().subscribe(
      (data: Users[]) => {
        this.users = data;
      },
      (error: any) => {
        console.error('Error al cargar los usuarios', error);
      }
    );
  }
}
