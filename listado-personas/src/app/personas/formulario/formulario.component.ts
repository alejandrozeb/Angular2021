import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogginService } from '../../LogginService.service';
import { Persona } from '../../persona.model';
import { PersonaService } from '../../personas.services';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  //decorador a padre
 // @Output() personaCreada= new EventEmitter<Persona>();
  //debe ser de angular el event emitter
  nombreInput:string = '';
  apellidoInput:string = '';

  index: number;

  //decorador local reference
  //@ViewChild('nombreRef') nombreViewChild:ElementRef;
 // @ViewChild('apellidoRef') apellidoViewChild:ElementRef;

  constructor(private loggingService:LogginService,
              private personasService:PersonaService,
              private router:Router,
              private route: ActivatedRoute
              ){
    //angular se encarga de crear una instancia

    this.personasService.saludar.subscribe(
      (indice: number) => alert("el indice es : "+indice)
    );

    //nos suscribimo al emisor
  }

  ngOnInit(){
    //recibimos el parametro de la vista

    this.index = this.route.snapshot.params['id'];
    if(this.index){
      let persona:Persona = this.personasService.encontrarPersona(this.index);
      //llenamos los campos
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  agregarPersona(nombreRef:HTMLInputElement, apellidoRef:HTMLInputElement){
    //let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    let persona1 = new Persona(nombreRef.value, apellidoRef.value);
    //llevando al padre
    //this.personaCreada.emit(persona1);

    this.personasService.agregarPersona(persona1);
  }
  agregarPersonaViewChild(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //usando el servicio
    this.loggingService.enviaMensajeAConsola("enviamos persona: "+persona1.nombre +" "+persona1.apellido);
    //recuperamos el valor
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }

 /*  OnAgregarPersona(){
    let persona1 = new Persona(this.nombreViewChild.nativeElement.value, this.apellidoViewChild.nativeElement.value);

    //this.loggingService.enviaMensajeAConsola("enviamos persona con nombre " + persona1.nombre +" " + persona1.apellido);
    this.personasService.agregarPersona(persona1);
  } */

  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);

    if(this.index){
      //edicion
      this.personasService.modificarPersona( this.index, persona1);
    }else{  
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }

}
