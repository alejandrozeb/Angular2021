import { Component, OnInit } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Persona } from './persona.model';
import { PersonaService } from './personas.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  //inicializamos la variable
  personas: Persona[] = [];
  
  //usando el servico
  constructor(private logginService: LogginService,
              private personaService: PersonaService){}
  /* personaAgregada(persona: Persona){
    this.logginService.enviaMensajeAConsola("desde app");
    this.personas.push(persona);
  } */

  //implementamos el on INnt se manda a llamar desues del contructor
  ngOnInit():void{
    this.personas = this.personaService.personas;
  }

  //las personas las agregamos en el servicio

  personaAgregada(persona: Persona){
    //this.logginService.enviaMensajeAConsola("desde app");
    this.personaService.agregarPersona(persona);
  }

}
