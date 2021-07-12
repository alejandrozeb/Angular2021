import { Component, Input, OnInit } from '@angular/core';
import { EgresoService } from '../Egreso.Service';
import { IngresoService } from '../Ingreso.Service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  
  @Input() presupuestoTotal:number;
  @Input() ingresoTotal:number;
  @Input() egresoTotal:number;
  @Input() porcentajeTotal:number;
    
  constructor(
    private ingresosService: IngresoService,
    private egresosService: EgresoService
  ) { }

  ngOnInit(): void {
  }

}
