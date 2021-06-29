import { Component } from "@angular/core";

//definicion
//traemos el decorador
@Component({
    selector: 'app-personas',    //nombre en hmtl
    templateUrl: './personas.component.html',//ruta template
    //template: '<h1>Listado de personas</h1><app-persona></app-persona><app-persona></app-persona><app-persona></app-persona>',//agregamos directamente el html de del componente y de perona inline podemos interpolar para usar espacios
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje:string = 'no se ha agregado ninguna persona';
    titulo:string = '';
     agregarPersona(){
        this.mensaje = 'Persona agregada';
    }

    modificarTitulo(event: Event){
        console.log('ingesando al metodo');
    //debe ser de tipo event
    this.titulo = (<HTMLInputElement>event.target).value;
    //target es el elemnto html debemos hacer un parse y sacamos el value
    //por cada cambio en el input se ejecuta este metodo

    }
}