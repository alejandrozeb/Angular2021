import {Injectable} from "@angular/core"
import { LogginService } from "./LogginService.service";
import { Persona } from "./persona.model";
//indicamos que inyectaremos otro servicio
@Injectable()
//inyecta una nstacia de logginService
export class PersonaService{
    personas: Persona[] = [
        new Persona("Juan","Perez"),
        new Persona("Laura","Juarez"),
        new Persona("Alejandro","Zeballos")
      ];
    //inyectando un servicio

    constructor(private logginService: LogginService ){    }
    agregarPersona(persona: Persona){
        this.logginService.enviaMensajeAConsola("Agregamos perosna: "+persona.nombre+" " + persona.apellido);
        this.personas.push(persona);
    }
}