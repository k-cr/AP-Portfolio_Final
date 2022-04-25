import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "https://cristianramos.herokuapp.com/api/auth/login";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    console.log("el servicio de autenticación está andando bien");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  LogIn(credentials: any): Observable<any> {
    return this.http.post(this.url, credentials).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  get AuthUser(){
    return this.currentUserSubject.value;
  }
}
