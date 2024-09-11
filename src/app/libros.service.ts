import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libros } from './interface/libros';


const url = 'http://localhost:8081'

@Injectable({
  providedIn: 'root'
})

export class LibrosService {

  constructor(private http:HttpClient) {  
  }

  getLibros():Observable<any>{
    return this.http.get(url + '/api/user');
  }

  getLibroById(id: number): Observable<any> {
    return this.http.get(`${url}/api/admin/id/${id}`);
  }

  getLibroByIsbn(isbn: string): Observable<any> {
    return this.http.get(`${url}/api/admin/isbn/${isbn}`);
  }

  searchLibrosByTitulo(titulo: string): Observable<any> {
    return this.http.get(`${url}/api/admin/search?titulo=${titulo}`);
  }

  // createLibro(libro: Libros): Observable<any> {
  //   return this.http.post(url + '/api/libro/', libro);
  // }

  updateLibro(libro: Libros): Observable<any> {
    return this.http.put(url + '/api/admin/', libro);
  }

  deleteLibro(libro: Libros): Observable<boolean> {
    return this.http.delete<boolean>(url + '/api/admin/', {
      body: libro
    });
  }
}
