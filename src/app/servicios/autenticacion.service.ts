import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
<<<<<<< HEAD
  url="http://npinti.ddns.net:8080/login/persona";
=======
  url="http://localhost:8080/persona/login";
>>>>>>> b0b7e13 (FrontEnAngular/botonBorrarYEditarFuncionales)
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
  }

  IniciarSesion(credenciales:any):Observable<any>
  {
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }

}
