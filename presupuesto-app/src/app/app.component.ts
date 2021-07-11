import { Component, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './Egreso.Service';
import { IngresoService } from './Ingreso.Service';
import { Ingreso } from './ingresos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';
  ingresos: Ingreso[];
  egresos: Egreso[];
  
  constructor(
    private ingresoService:IngresoService,
    private egresoService:EgresoService
  ){}

  ngOnInit():void{
    this.ingresos = this.ingresoService.ingresos;
    this.egresos = this.egresoService.egresos;
  }
}
