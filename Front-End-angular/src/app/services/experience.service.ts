import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  ExperienceURL = "https://cristianramos.herokuapp.com/api/experience";
  constructor(private http: HttpClient) { }

  public getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.ExperienceURL + 'all');
  }

  public search(id: number): Observable<any> {
    return this.http.get<any>(this.ExperienceURL + 'find/${id}');
  }

  public save(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(this.ExperienceURL + 'new', experience);
  }

  public update(experience: Experience): Observable<Experience> {
    return this.http.post<any>(this.ExperienceURL + 'edit', experience);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.ExperienceURL + 'delete/${id}');
  }
}
