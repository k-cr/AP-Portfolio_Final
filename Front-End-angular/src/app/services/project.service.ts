import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model'; 

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  ProjectURL = "https://cristianramos.herokuapp.com/api/project";
  constructor(private http: HttpClient) { }

  public getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.ProjectURL + 'all');
  }

  public search(id: number): Observable<any> {
    return this.http.get<any>(this.ProjectURL + 'find/${id}');
  }

  public save(project: Project): Observable<Project>{
    return this.http.post<Project>(this.ProjectURL + 'new', project);
  }

  public update(project: Project): Observable<Project> {
    return this.http.put<Project>(this.ProjectURL + 'edit', project);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.ProjectURL + 'delete/${id}');
  }
}
