import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EgresoService } from './Egreso.Service';
import { IngresoService } from './Ingreso.Service';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    FormularioComponent,
    IngresoComponent,
    EgresoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EgresoService, IngresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
