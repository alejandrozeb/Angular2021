import {EventEmitter, Injectable} from "@angular/core"
import { DataServices } from "./data.services";
import { LogginService } from "./LogginService.service";
import { Persona } from "./persona.model";
//indicamos que inyectaremos otro servicio
@Injectable()
//inyecta una nstacia de logginService
export class PersonaService{
    personas: Persona[] = [];
    //comunicacion entre componentes
    saludar = new EventEmitter<number>();


    //inyectando un servicio

    constructor(private logginService: LogginService, private dataServices: DataServices ){    }
    
    agregarPersona(persona: Persona){
        this.logginService.enviaMensajeAConsola("Agregamos perosna: "+persona.nombre+" " + persona.apellido);
        
        if(this.personas == null){
            this.personas = [];
        }

        this.personas.push(persona);
        this.dataServices.guardarPersona(this.personas);
    }

    obtenerPersonas(){
        return this.dataServices.cargarPersonas();
    }

    setPersonas(personas: Persona[]){
        this.personas = personas;
    }

    encontrarPersona(index: number){
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index:number, persona: Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataServices.modificarPersona(index,persona);
    }
    
    eliminarPersona(index: number){
        this.personas.splice(index, 1);
    }
}