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
    private usuarioExistenteServive: UsuarioExisteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.usuarioForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(100)]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(100)]]
    });
  }

  salvar(): void {
    if(this.usuarioService.existeUsuario(this.usuarioForm.controls['username'].value.name)) {
      alert("Usuário já cadastrado");
    }

    this.usuarioService.saveUsuario(this.usuarioForm.value).subscribe(
      () => this.router.navigate(['home']),
      (error) => console.log("Erro: " + error.message));
  }

  voltar(): void {
    history.go(-1);
  }

}
