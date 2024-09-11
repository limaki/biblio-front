
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const BASE_URL = ["http://localhost:8081"]


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(loginRequest:any):Observable<any>{
    return this.http.post(BASE_URL + '/api/auth/login', loginRequest);
  }

  
  register(signupRequest: any):Observable<any>{
    return this.http.post(BASE_URL + '/api/auth/signup', signupRequest);
  }
}