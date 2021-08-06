import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioExisteService } from '../usuario-existe.service';
import { usuarioSenhaIguaisValidator } from '../usuario-senha-iguais.validator';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-insert-usuario',
  templateUrl: './insert-usuario.component.html',
  styleUrls: ['./insert-usuario.component.css']
})
export class InsertUsuarioComponent implements OnInit {

  usuarioForm!: FormGroup;
  confirmPassword!: string;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.usuarioForm = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  salvar(): void {
    this.usuarioService.saveUsuario(this.usuarioForm.value).subscribe(
      () => this.router.navigate(['home']),
      (error) => console.log("Erro: " + error));
  }

  voltar(): void {
    history.go(-1);
  }

}
