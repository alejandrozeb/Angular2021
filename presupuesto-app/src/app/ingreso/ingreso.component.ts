import { Component, OnInit } from '@angular/core';
import { EgresoService } from '../Egreso.Service';
import { IngresoService } from '../Ingreso.Service';
import { Ingreso } from '../ingresos.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  
  ingresos: Ingreso[];
  constructor(
    private ingresosService: IngresoService
  ) { }

  ngOnInit(): void {
   this.ingresos = this.ingresosService.ingresos;
   console.log(this.ingresos);
  }

}
