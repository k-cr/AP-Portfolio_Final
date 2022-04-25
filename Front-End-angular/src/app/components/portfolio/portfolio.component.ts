import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  url: string = "https://cristianramos.herokuapp.com/api/";
  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.url + "person");
  }

  ngOnInit(): void {
  }

}
