import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EgresoService } from './Egreso.Service';
import { IngresoService } from './Ingreso.Service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EgresoService, IngresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
