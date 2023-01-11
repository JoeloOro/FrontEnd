import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
>>>>>>> b0b7e13 (FrontEnAngular/botonBorrarYEditarFuncionales)
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit{
  educacionList:any;
<<<<<<< HEAD
  constructor(private datosPorfolio:PorfolioService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.educacionList=data.education;
    })
  }
  
=======
  experiencias: Experiencia[] = []
  constructor(private datosPorfolio:PorfolioService, private datos:ExperienciaService) {}

  ngOnInit(): void {
    this.cargarExperiencias();
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.educacionList=data.education;
    });
  }

  cargarExperiencias():void{
    this.datos.lista().subscribe(data =>{
      console.log(data);
      this.experiencias=data;
    });
  }

  borrar(id:number){
    this.datos.delete(id).subscribe(data =>{
      this.cargarExperiencias;
    }, err =>{
      alert("error");
    });
    this.cargarExperiencias;
  }

>>>>>>> b0b7e13 (FrontEnAngular/botonBorrarYEditarFuncionales)
}
