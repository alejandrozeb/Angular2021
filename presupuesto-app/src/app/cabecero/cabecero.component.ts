import { Component, OnInit } from '@angular/core';
import { EgresoService } from '../Egreso.Service';
import { IngresoService } from '../Ingreso.Service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  total:number;
  ingresos:number;
  egresos:number;
    
  constructor(
    private ingresosService: IngresoService,
    private egresosService: EgresoService
  ) { }

  ngOnInit(): void {
    this.egresos=this.egresosService.total();
    this.ingresos = this.ingresosService.total();
    this.total = this.ingresos - this.egresos;
  }

}
