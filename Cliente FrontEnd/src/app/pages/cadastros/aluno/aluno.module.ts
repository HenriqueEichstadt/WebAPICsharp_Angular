import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { GridAlunoComponent } from './grid-aluno/grid-aluno.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlunoService } from './aluno.service';
import { ViewAlunoComponent } from './view-aluno/view-aluno.component';
import { InsertAlunoComponent } from './insert-aluno/insert-aluno.component';
import { UpdateAlunoComponent } from './update-aluno/update-aluno.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    AlunoRoutingModule
  ],
  declarations: [
    GridAlunoComponent,
    ViewAlunoComponent,
    InsertAlunoComponent,
    UpdateAlunoComponent
  ],
  exports: [
    GridAlunoComponent,
    ViewAlunoComponent,
    InsertAlunoComponent,
    UpdateAlunoComponent
  ],
  providers: [
    AlunoService,
  ]
})
export class AlunoModule { }
