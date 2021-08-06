import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-update-aluno',
  templateUrl: './update-aluno.component.html',
  styleUrls: ['./update-aluno.component.css']
})
export class UpdateAlunoComponent implements OnInit {

  alunoForm!: FormGroup;
  entity: Aluno = new Aluno();

  constructor(
    private fb: FormBuilder,
    private alunoService: AlunoService,
    private route: ActivatedRoute
  ) {
    this.entity = this.route.snapshot.data.entity;
   }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.alunoForm = this.fb.group({
      idAluno: [this.entity.idAluno, []],
      nome: [this.entity.nome, [Validators.required, Validators.maxLength(100)]],
      telefone: [this.entity.telefone, [Validators.required, Validators.maxLength(15)]]
    })
  }

  salvar(): void {
    this.alunoService.updateAluno(this.alunoForm.value)
    .subscribe(() => this.voltar());
  }

  voltar(): void {
    history.go(-1);
  }

}
