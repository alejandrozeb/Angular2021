import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
    @Output() resultadoCalculado = new EventEmitter<number>();
    operandoA: number=0;
    operandoB: number=0;
  sumar():void{
    const resulatdoOperacion = this.operandoA + this.operandoB;
    this.resultadoCalculado.emit(resulatdoOperacion);
  }

}
