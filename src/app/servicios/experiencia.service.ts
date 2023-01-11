import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url="http://localhost:8080/experiencia/";
  constructor(private http:HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url + 'ver');
  }

  public detail(id: number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url + 'ver/{id}');
  }

  public save(Experiencias: Experiencia):Observable<any>{
    return this.http.post<any>(this.url + 'crear', Experiencias);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.url + 'delete/'+ id);
  }
}
