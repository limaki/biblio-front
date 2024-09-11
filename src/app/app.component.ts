import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  isUserLoggedIn :boolean = StorageService.isUserLoggedIn();
  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();
  title = 'biblioteca';

  ngOnInit(): void {
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

}
