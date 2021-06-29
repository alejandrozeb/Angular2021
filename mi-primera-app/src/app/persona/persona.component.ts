import { Component} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  //podemos agregar atributos y tambien se pueden usar metodos

  nombre: string = 'Juan';
  apellido: string = 'Perez';
  edad: number =28;  

  //si definimos como privado no funcionara
  private puesto: string = "Programador";
  getPuesto(){
    return this.puesto;
  }

}
