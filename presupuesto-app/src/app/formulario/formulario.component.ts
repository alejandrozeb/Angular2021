import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Egreso } from '../egreso.model';
import { EgresoService } from '../Egreso.Service';
import { IngresoService } from '../Ingreso.Service';
import { IngresoComponent } from '../ingreso/ingreso.component';
import { Ingreso } from '../ingresos.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo:string='ing';
  selectForm:string='';
  descripcionForm:string='';
  cantidadForm:number=0;
  constructor(private ingresosService: IngresoService,
    private egresosService: EgresoService) { }

  ngOnInit(): void {
  }
  
  procesarForm(){
    if(this.selectForm == "ing"){
      this.agregarIngreso(this.descripcionForm, this.cantidadForm);
    }else if(this.selectForm == "egr"){
      this.agregarEgreso(this.descripcionForm, this.cantidadForm);
    }else{
      alert("selecciona una opcion");
    }
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }

  protected agregarIngreso(descripcion:string, cantidad:number){
    let ingreso:Ingreso = new Ingreso(descripcion, cantidad);
    this.ingresosService.agregarIngreso(ingreso);    
  }  

  protected agregarEgreso(descripcion:string, cantidad:number){
    let egreso:Egreso = new Egreso(descripcion,cantidad);
    this.egresosService.agregarEgreso(egreso);
  }
}
