import { Component, OnInit } from '@angular/core';
import { EgresoService } from '../Egreso.Service';
import { IngresoService } from '../Ingreso.Service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  
    
  constructor(
    private ingresosService: IngresoService,
    private egresosService: EgresoService
  ) { }

  ngOnInit(): void {
   
  }

}
