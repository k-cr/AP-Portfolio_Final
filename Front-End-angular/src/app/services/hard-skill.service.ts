import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkill } from '../models/hard-skill.model';

@Injectable({
  providedIn: 'root'
})
export class HardSkillService {
  hsURL = 'https://cristianramos.herokuapp.com/api/hardskill';
  constructor(private http: HttpClient) { }

  public getSkills(): Observable<HardSkill[]> {
    return this.http.get<HardSkill[]>(this.hsURL + 'all');
  }

  public save(hardskill: HardSkill): Observable<HardSkill> {
    return this.http.post<HardSkill>(this.hsURL + 'new', hardskill);
  }

  public search(id: number): Observable<any> {
    return this.http.get<any>(this.hsURL + 'find/${id}');
  }

  public update(hardskill: HardSkill): Observable<HardSkill> {
    return this.http.put<any>(this.hsURL + 'edit', hardskill);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.hsURL + 'delete/${id}');
  }
}
