import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';

const routes: Routes=[
  {path: '', component: PersonasComponent},//se despliega en el index principal
  {path: 'personas', component: PersonasComponent, children:[
    //la / se agrega solo /personas
    {path: 'agregar', component:   FormularioComponent},
    {path: ':id', component: FormularioComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
