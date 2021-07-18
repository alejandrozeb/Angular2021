import {HttpClient} from '@angular/common/http';
//para que pueda ser inyectado debemos usar el decorador injectable
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    //estlabe comunicacion con la bd 
    //usamos httpclient para realizar las peticiones
    
    constructor(private httpClient: HttpClient){}

    guardarPersona(personas: Persona[]){
        //enviando un post
        this.httpClient.post('https://listado-personas-74bcf-default-rtdb.firebaseio.com/datos.json', personas).subscribe(
            //aqui recibioms la respuesta
            response => {
                console.log('resultado de la consulta: ' + response);
            },
            error => console.log("Error al guardar Personas" + error)
        )


    }
    
}