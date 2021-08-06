import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../cadastros/usuario/usuario.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  mensagem!: string;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarioService.retornaUsuario().subscribe(
      usuario => {
        this.mensagem = "Bem vindo " + usuario.nome + "!";
      });

  }

}
