import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component'; 
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarconocimientoComponent } from './inicio/agregarconocimiento/agregarconocimiento.component';
import { EditarconocimientoComponent } from './inicio/editarconocimiento/editarconocimiento.component';
import { AgregardosComponent } from './inicio/agregardos/agregardos.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'addconocimiento', component: AgregarconocimientoComponent },
    { path: 'editconocimiento', component: EditarconocimientoComponent },
    { path: 'test', component: AgregardosComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
