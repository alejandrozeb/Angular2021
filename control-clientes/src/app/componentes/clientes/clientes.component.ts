import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { clienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] | undefined;

  constructor(private clientesServicio: clienteServicio) { }

  ngOnInit(): void {
    //no subscribimos
    this.clientesServicio.getClientes()?.subscribe(
      clientes =>{
        this.clientes = clientes;
      }
    )
  }

  getSaldoTotal(){
    let saldoTotal:number=0;
    if(this.clientes){
      this.clientes.forEach(cliente =>{
        if(cliente.saldo != undefined){
          saldoTotal = saldoTotal + cliente.saldo;
        }
      })
    }
    return saldoTotal;
  }

}
