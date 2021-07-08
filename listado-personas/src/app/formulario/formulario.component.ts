import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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

  //decorador local reference
  @ViewChild('nombreRef') nombreViewChild:ElementRef;
  @ViewChild('apellidoRef') apellidoViewChild:ElementRef;

  agregarPersona(nombreRef:HTMLInputElement, apellidoRef:HTMLInputElement){
    //let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    let persona1 = new Persona(nombreRef.value, apellidoRef.value);
    //llevando al padre
    this.personaCreada.emit(persona1);
  }
  agregarPersonaViewChild(){
    let persona1 = new Persona(this.nombreViewChild.nativeElement.value, this.apellidoViewChild.nativeElement.value);
    //recuperamos el valor
    this.personaCreada.emit(persona1);
  }

}
