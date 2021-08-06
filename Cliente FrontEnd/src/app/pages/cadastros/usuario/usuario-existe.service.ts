import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private usuarioService: UsuarioService) {}

  usuarioJaExite() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.usuarioService.existeUsuario(nomeUsuario)
        ),
        map((usuarioExiste) =>
          usuarioExiste ? { usuarioExistente: true } : null
        ),
        first()
      );
    };
  }
}
