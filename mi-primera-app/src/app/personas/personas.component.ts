import { Component } from "@angular/core";

//definicion
//traemos el decorador
@Component({
    selector: 'app-personas',    //nombre en hmtl
    //templateUrl: './personas.component.html',//ruta template
    template: '<h1>Listado de personas</h1><app-persona></app-persona><app-persona></app-persona><app-persona></app-persona>',//agregamos directamente el html de del componente y de perona inline podemos interpolar para usar espacios
})
export class PersonasComponent{

}