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
  ){
    this.ingresos = this.ingresoService.ingresos;
    this.egresos = this.egresoService.egresos;
  }

  ngOnInit():void{
  }
  getIngresoTotal(){
    let ingresoTotal: number = 0;
    ingresoTotal = this.ingresoService.total();
    return ingresoTotal;
  }  

  getEgresoTotal(){
    let egresoTotal: number = 0;
    egresoTotal = this.egresoService.total();
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
