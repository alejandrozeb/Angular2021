import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Cliente } from "../models/cliente.model";

@Injectable()
export class clienteServicio{
     ///trabajeremos con la coleecion de bd
     clientesColeccion: AngularFirestoreCollection<Cliente> | undefined;

     clienteDoc: AngularFirestoreDocument<Cliente> | undefined;
     
     //en esta recibiremos la data sera un observable
     clientes: Observable<Cliente[]> | undefined;
     cliente: Observable<Cliente> | undefined;

     constructor(private db: AngularFirestore ){
         //recuperamos la coleccion clientes
        this.clientesColeccion = db.collection('clientes', ref => ref.orderBy('nombre', 'asc'));
     }

     getClientes(): Observable<Cliente[]>|undefined{
        //obteners los clinetes
        this.clientes = this.clientesColeccion?.snapshotChanges().pipe(
            //itera los elementos
            map(cambios => {
                //recupera los campos
                return cambios.map(accion =>{
                    const datos = accion.payload.doc.data() as Cliente;
                    datos.id = accion.payload.doc.id;
                    return datos;
                })
            })
        );
        return this.clientes;
     }
     
}