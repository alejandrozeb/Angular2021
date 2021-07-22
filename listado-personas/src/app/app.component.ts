import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService){}

  ngOnInit() {
    firebase.default.initializeApp({
      apiKey: 'AIzaSyBHKoI-wmWqt3KoUWF-mq8lzjENFV5g5Z0',
      authDomain: 'listado-personas-74bcf.firebaseapp.com',
    });
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
    
  }
  salir() {

  }
}
