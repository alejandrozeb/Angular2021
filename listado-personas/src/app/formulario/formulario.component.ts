import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LogginService } from '../LogginService.service';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.services';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  //decorador a padre
 // @Output() personaCreada= new EventEmitter<Persona>();
  //debe ser de angular el event emitter
  /* nombreInput:string = '';
  apellidoInput:string = ''; */

  //decorador local reference
  @ViewChild('nombreRef') nombreViewChild:ElementRef;
  @ViewChild('apellidoRef') apellidoViewChild:ElementRef;

  constructor(private loggingService:LogginService,
              private personasService:PersonaService){
    //angular se encarga de crear una instancia
  }

  agregarPersona(nombreRef:HTMLInputElement, apellidoRef:HTMLInputElement){
    //let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    let persona1 = new Persona(nombreRef.value, apellidoRef.value);
    //llevando al padre
    //this.personaCreada.emit(persona1);

    this.personasService.agregarPersona(persona1);
  }
  agregarPersonaViewChild(){
    let persona1 = new Persona(this.nombreViewChild.nativeElement.value, this.apellidoViewChild.nativeElement.value);
    //usando el servicio
    this.loggingService.enviaMensajeAConsola("enviamos persona: "+persona1.nombre +" "+persona1.apellido);
    //recuperamos el valor
    //this.personaCreada.emit(persona1);
  }

  OnAgregarPersona(){
    let persona1 = new Persona(this.nombreViewChild.nativeElement.value, this.apellidoViewChild.nativeElement.value);

    //this.loggingService.enviaMensajeAConsola("enviamos persona con nombre " + persona1.nombre +" " + persona1.apellido);
    this.personasService.agregarPersona(persona1);
  }

}
