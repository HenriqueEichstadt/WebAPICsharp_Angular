import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-insert-aluno',
  templateUrl: './insert-aluno.component.html',
  styleUrls: ['./insert-aluno.component.css']
})
export class InsertAlunoComponent implements OnInit {

  alunoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.alunoForm = this.fb.group({
      idAluno: [0, []],
      nome: [null, [Validators.required, Validators.maxLength(100)]],
      telefone: [null, [Validators.required, Validators.maxLength(15)]]
    })
  }

  salvar(): void {
    this.alunoService.saveAluno(this.alunoForm.value).subscribe(
      () => this.voltar(),
      (error) => console.log("Erro: " + error));
  }

  voltar(): void {
    history.go(-1);
  }

}
