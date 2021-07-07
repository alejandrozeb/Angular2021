import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion calculadora';
  resultado: number=0;

  getResult(resultado: number){
    this.resultado = resultado;
  }

  
}
