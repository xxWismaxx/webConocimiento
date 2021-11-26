import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SharedModule } from '../shared/shared.module';
import { AgregarconocimientoComponent } from './inicio/agregarconocimiento/agregarconocimiento.component';
import { EditarconocimientoComponent } from './inicio/editarconocimiento/editarconocimiento.component';
import { AgregardosComponent } from './inicio/agregardos/agregardos.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    AgregarconocimientoComponent,
    EditarconocimientoComponent,
    AgregardosComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
