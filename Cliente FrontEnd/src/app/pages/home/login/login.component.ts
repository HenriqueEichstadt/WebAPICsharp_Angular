import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { UsuarioService } from '../../cadastros/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AutenticacaoService,
    private usuarioService: UsuarioService
    ) { }

  usuario = "";
  senha = "";

  ngOnInit(): void {
    this.usuarioService.mostrarMenuEmitter.emit(false);
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login(): void {
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      this.router.navigate(["home"]);
    },
    (error) => {
      alert("Usuário ou senha inválido");
      console.log(error);
    });
  }

}
