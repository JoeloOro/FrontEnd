import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
  }
}
