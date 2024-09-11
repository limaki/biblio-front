import { Injectable } from '@angular/core';

const TOKEN = "token";
const USER = "user";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static saveToken(token:string):void{

    window.localStorage.removeItem(TOKEN); //limpiar consola
    window.localStorage.setItem(TOKEN, token); //agregar ala consola

  }

  static saveUser(user:any):void{

    window.localStorage.removeItem(USER); //limpiar consola
    window.localStorage.setItem(USER, JSON.stringify(user)); //agregar ala consola  //pasar a string el user con stringify

  }  

  static getToken(){
    return window.localStorage.getItem(TOKEN);
  }

  static getUser(){
    const user = localStorage.getItem(USER);
    return user ? JSON.parse(user) : null;
  }

  static getUserRole():string{
    const user = this.getUser();
    if(user == null) return "";
    return user.role;
  }

  //verificar si el admin esta logueado o no CUSTOMER y ADMIN

   static isAdminLoggedIn():boolean{
     if(this.getToken() == null) return false;
     const role:string = this.getUserRole();
     return role === "ADMIN";
   }
  static isUserLoggedIn():boolean{
    if(this.getToken() == null) return false;
    const role:string = this.getUserRole();
    return role === "USER";
  }



  //LOGOUT tanto para eñ customer como para login

  static logout():void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}
