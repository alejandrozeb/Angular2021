import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Cliente } from 'src/app/models/cliente.model';
import { clienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] | undefined;
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0 
  }

  constructor(private clientesServicio: clienteServicio, 
              private flashMessages: FlashMessagesService  ) { } 

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

  agregar({value, valid}: {value: Cliente, valid: Boolean|undefined|null}){
    if(!valid){
      this.flashMessages.show("Por favor llena el formulario correctamente", {
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      //agregar un nuevo cliene
    }
  }

}
