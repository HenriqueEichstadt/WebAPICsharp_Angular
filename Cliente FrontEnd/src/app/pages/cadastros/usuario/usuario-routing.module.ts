import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertUsuarioComponent } from './insert-usuario/insert-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: InsertUsuarioComponent,
  },
  {
    path: 'insert',
    component: InsertUsuarioComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
