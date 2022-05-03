import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  PersonURL = "https://cristianramos.herokuapp.com/api/person";
  constructor(private http: HttpClient) { }

  public getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(this.PersonURL + 'ver/${id}');
  }

  public save(person: Person): Observable<Person> {
    return this.http.post<Person>(this.PersonURL + 'new', person);
  }

  public update(person: Person): Observable<Person> {
    return this.http.put<any>(this.PersonURL + 'edit', person);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.PersonURL + 'delete/${id}');
  }
}
