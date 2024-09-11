import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Libros } from './interface/libros';
import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:8081'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService:AuthService,
              private http:HttpClient
  ) { }

  createAuthorizationHeader(): HttpHeaders{
    let authHeaders:HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }

  // createLibro(libro: Libros): Observable<any> {
  //   return this.http.post(url + '/api/libro/', libro, {

  //     headers : this.createAuthorizationHeader()
  //   });
  // }



  getLibros():Observable<any>{
    return this.http.get(url + '/api/user', {
      headers : this.createAuthorizationHeader()
    });
  }
  getOneLibroUser(id: string):Observable<any>{
    return this.http.get(url + '/api/user/id/' + id, {
    headers : this.createAuthorizationHeader()
  })
  }

  //admin

  getLibrosAdmin():Observable<any>{
    return this.http.get(url + '/api/admin', {
      headers : this.createAuthorizationHeader()
    });
  }

  deleteLibro(id:string):Observable<any>{
    return this.http.delete(url + '/api/admin/' + id, {
      headers : this.createAuthorizationHeader()
    })
  }

  updateLibro(id: string, libro: Libros): Observable<any> {
    return this.http.put(url + '/api/admin/' + id, libro, {
      headers : this.createAuthorizationHeader()
    });
  }


  getOneLibro(id: string):Observable<any>{
    return this.http.get(url + '/api/admin/id/' + id, {
    headers : this.createAuthorizationHeader()
  })
  }

  addLibro(libro: Libros):Observable<any>{
    return this.http.post(url + '/api/admin/', libro, {
      headers : this.createAuthorizationHeader()
    })
  }

  searchByTitulo(titulo: string): Observable<any> {
     const headers = this.createAuthorizationHeader();
    return this.http.get(`${url}/api/admin/search?titulo=${titulo}`, { 
      headers : this.createAuthorizationHeader()
     });
  }

  getByIsbn(isbn: string): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get(`${url}/api/admin/isbn/${isbn}`, { 
      headers : this.createAuthorizationHeader()
     });
  }

  getUsers():Observable<any>{
    return this.http.get(url + '/api/admin/users' , { 
      headers : this.createAuthorizationHeader()
     });
  }


  
  

}
