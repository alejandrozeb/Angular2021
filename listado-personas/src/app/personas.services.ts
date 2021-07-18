import {EventEmitter, Injectable} from "@angular/core"
import { DataServices } from "./data.services";
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
    //comunicacion entre componentes
    saludar = new EventEmitter<number>();


    //inyectando un servicio

    constructor(private logginService: LogginService, private dataServices: DataServices ){    }
    agregarPersona(persona: Persona){
        this.logginService.enviaMensajeAConsola("Agregamos perosna: "+persona.nombre+" " + persona.apellido);
        this.personas.push(persona);
        this.dataServices.guardarPersona(this.personas);
    }

    encontrarPersona(index: number){
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index:number, persona: Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
    }

    eliminarPersona(index: number){
        this.personas.splice(index, 1);
    }
}