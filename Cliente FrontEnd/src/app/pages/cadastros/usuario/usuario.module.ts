import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { InsertUsuarioComponent } from './insert-usuario/insert-usuario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuarioService } from './usuario.service';


@NgModule({
  declarations: [
    InsertUsuarioComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    UsuarioRoutingModule
  ],
  exports: [
    InsertUsuarioComponent
  ],
  providers: [
    UsuarioService,
  ]
})
export class UsuarioModule { }
