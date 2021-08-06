import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { InsertUsuarioComponent } from './insert-usuario/insert-usuario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuarioService } from './usuario.service';
import { MensagemModule } from 'src/app/componentes/mensagem/mensagem.module';


@NgModule({
  declarations: [
    InsertUsuarioComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    UsuarioRoutingModule,
    MensagemModule
  ],
  exports: [
    InsertUsuarioComponent
  ],
  providers: [
    UsuarioService,
  ]
})
export class UsuarioModule { }
