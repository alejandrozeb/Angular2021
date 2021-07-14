import { Component, OnInit } from '@angular/core';
import { LogginService } from '../LogginService.service';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.services';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];
  
  constructor(private logginService: LogginService,
              private personaService: PersonaService){}
 
  ngOnInit():void{
    this.personas = this.personaService.personas;
  }
}
