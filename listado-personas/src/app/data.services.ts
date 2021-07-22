import {HttpClient} from '@angular/common/http';
//para que pueda ser inyectado debemos usar el decorador injectable
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    //estlabe comunicacion con la bd 
    //usamos httpclient para realizar las peticiones
    
    constructor(private httpClient: HttpClient, private loginService: LoginService){}

    guardarPersona(personas: Persona[]){
        const token = this.loginService.getIdToken();
        //enviando un post
        this.httpClient.put('https://listado-personas-74bcf-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas).subscribe(
            //aqui recibioms la respuesta
            response => {
                console.log('resultado de la consulta: ' + response);
            },
            error => console.log("Error al guardar Personas" + error)
        )
    }

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get<Persona[]>('https://listado-personas-74bcf-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    modificarPersona(index: number, persona: Persona){
        const token = this.loginService.getIdToken();
        let url: string ="";
        url = "https://listado-personas-74bcf-default-rtdb.firebaseio.com/datos/"+ index + '.json?auth='+ token;

        //siempre debe terminar en .json

        this.httpClient.put(url, persona)
            .subscribe(
                response => console.log("resultado modificar Persona" + response),
                error => console.log("error en modificar la persona"+ error)
            );  
    }

    eliminarPersona(index: number){
        const token = this.loginService.getIdToken();
        let url: string ="";
        url = "https://listado-personas-74bcf-default-rtdb.firebaseio.com/datos/"+ index + '.json?auth='+token;
        this.httpClient.delete(url)
            .subscribe(
                response => console.log("resultado eliminar Persona" + response),
                error => console.log("error en eliminar la persona"+ error)
            );
    }
    
}