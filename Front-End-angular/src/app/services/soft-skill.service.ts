import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from '../models/soft-skill.model';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {
  sfURL = 'https://cristianramos.herokuapp.com/api/softksill';
  constructor(private http: HttpClient) { }

  public getSoftSkill(): Observable<SoftSkill[]> {
    return this.http.get<SoftSkill[]>(this.sfURL + '/all');
  }

  public save(softskill: SoftSkill): Observable<SoftSkill>{
    return this.http.post<SoftSkill>(this.sfURL + 'new', softskill);
  }

  public search(id: number): Observable<any> {
    return this.http.get<any>(this.sfURL + 'find/${id}');
  }

  public update(softksill: SoftSkill): Observable<SoftSkill> {
    return this.http.put<any>(this.sfURL + 'edit', softksill);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.sfURL + 'delete/${id}');
  }
}
