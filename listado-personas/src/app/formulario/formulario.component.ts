import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  //decorador a padre
  @Output() personaCreada= new EventEmitter<Persona>();
  //debe ser de angular el event emitter
  /* nombreInput:string = '';
  apellidoInput:string = ''; */

  agregarPersona(nombreRef:HTMLInputElement, apellidoRef:HTMLInputElement){
    //let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    let persona1 = new Persona(nombreRef.value, apellidoRef.value);
    //llevando al padre
    this.personaCreada.emit(persona1);
  }

}
