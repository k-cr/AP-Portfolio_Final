import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  AboutUrl = 'https://cristianramos.herokuapp.com/api/about';
  constructor(private http: HttpClient) { }

  public getAbout(): Observable<About[]>{
    return this.http.get<About[]>(this.AboutUrl + 'all');
  }  

  public search(id: number): Observable<any> {
    return this.http.get<any>(this.AboutUrl + 'find/${id}');
  }

  public save(about: About): Observable<About> {
    return this.http.post<About>(this.AboutUrl + 'new', about);
  }

  public update(about: About): Observable<About> {
    return this.http.put<any>(this.AboutUrl + 'edit', about);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.AboutUrl + 'delete/${id}');
  }
}
