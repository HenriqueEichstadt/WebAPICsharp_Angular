import { InsertAlunoComponent } from './insert-aluno/insert-aluno.component';
import { GridAlunoComponent } from './grid-aluno/grid-aluno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAlunoComponent } from './view-aluno/view-aluno.component';
import { AlunoService } from './aluno.service';
import { UpdateAlunoComponent } from './update-aluno/update-aluno.component';

const routes: Routes = [
  {
    path: '',
    component: GridAlunoComponent
  },
  {
    path: 'insert',
    component: InsertAlunoComponent
  },
  {
    path: 'update/:id',
    resolve: {
      entity: AlunoService
    },
    component: UpdateAlunoComponent
  },
  {
    path: 'view/:id',
    resolve: {
      entity: AlunoService
    },
    component: ViewAlunoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
