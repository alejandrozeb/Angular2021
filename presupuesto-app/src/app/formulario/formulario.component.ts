import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from '../ingresos.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  selectForm:string='';
  descripcionForm:string='';
  cantidadForm:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  
  procesarForm(){
    if(this.selectForm == "ing"){
      this.agregarIngreso(this.descripcionForm, this.cantidadForm);
    }else{
      this.agregarEgreso(this.descripcionForm, this.cantidadForm);
    }
  }

  protected agregarIngreso(descripcion:string, cantidad:number){
    let ingreso:Ingreso = new Ingreso(descripcion, cantidad);

  }  

  protected agregarEgreso(descripcion:string, cantidad:number){

  }
}
