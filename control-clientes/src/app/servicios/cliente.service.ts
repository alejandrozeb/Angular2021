import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Cliente } from "../models/cliente.model";

@Injectable()
export class clienteServicio{
     ///trabajeremos con la coleecion de bd
     clientesColeccion: AngularFirestoreCollection<Cliente> | undefined;

     clienteDoc: AngularFirestoreDocument<Cliente> | undefined;
     
     //en esta recibiremos la data sera un observable
     clientes: Observable<Cliente[]> | undefined;
     cliente: Observable<Cliente> | undefined;

     constructor(private bd: AngularFirestore ){

     }
     
}