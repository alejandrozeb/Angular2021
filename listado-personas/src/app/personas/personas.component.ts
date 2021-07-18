import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
              private personaService: PersonaService,
              private router:Router
              ){}
 
  ngOnInit():void{
    //devuelve un observable
    this.personaService.obtenerPersonas()
    .subscribe(
        (personas: Persona[]) =>{
          this.personas = personas;
          this.personaService.setPersonas(personas);
        }
      );
  }

  agregar(){
    //inyectamos router para navegar entre componenes
    //redireccionamos
    this.router.navigate(['personas/agregar']);
    //damos una url
  }
}
