import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  //recibe la informacion con decorador
  @Input() persona: Persona ;
  @Input() indice: number ;
  //recibiendo persona e indice
  

  constructor() { }

  ngOnInit(): void {
  }

}
