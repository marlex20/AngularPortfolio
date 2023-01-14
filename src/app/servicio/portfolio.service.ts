import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor(private httpclient: HttpClient) { }
  obtenerDatos(): Observable<any> {
    return this.httpclient.get('./assets/data/data.json');    

  }
}
