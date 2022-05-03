import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  EducationUrl = 'https://cristianramos.herokuapp.com/api/education';
  constructor(private http: HttpClient) { }

  public getEducation(): Observable<any> {
    return this.http.get<Education[]>(this.EducationUrl + 'all');
  }

  public search(id: number): Observable<any> {
    return this.http.get<any>(this.EducationUrl + 'find/${id}')
  }

  public deleteEducation(id: number): Observable<any> {
    return this.http.delete<any>(this.EducationUrl + 'delete/${id}');
  }

  public save(education: Education): Observable<Education> {
    return this.http.post<Education>(this.EducationUrl + 'new', education);
  }

  public update(education: Education): Observable<Education> {
    return this.http.post<Education>(this.EducationUrl + 'edit', education);
  }
}
