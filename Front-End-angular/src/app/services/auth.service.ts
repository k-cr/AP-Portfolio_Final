import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../models/new-user.model';
import { LoginUser } from '../models/login-user.model';
import { JwtDTO } from '../models/jwt-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = "https://cristianramos.herokuapp.com/api/auth/";
  constructor(private http: HttpClient) {   }

  public newUser(newUser: NewUser): Observable<any>{
    return this.http.post<any>(this.authURL + 'new', newUser);
  }

  public login(loginUser: LoginUser): Observable<any>{
    return this.http.post<JwtDTO>(this.authURL + 'login', loginUser);
  }

  public refresh(dto: JwtDTO): Observable<any>{
    return this.http.post<JwtDTO>(this.authURL + 'refresh', dto);
  }
}
