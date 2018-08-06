import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'editar/:id',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
