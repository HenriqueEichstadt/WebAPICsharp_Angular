import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-grid-aluno',
  templateUrl: './grid-aluno.component.html',
  styleUrls: ['./grid-aluno.component.css']
})
export class GridAlunoComponent implements OnInit {

  alunos: Aluno[] = [];

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.ObterAlunos();
  }

  ObterAlunos(): void {
    this.alunoService.getAlunos()
      .subscribe((alunos: Aluno[]) => this.alunos = alunos);
  }

  editar(id: number): void {
    this.router.navigate([`./update/${id}`]);
  }

  excluir(id: number): void {
    this.alunoService.deleteAluno(id)
      .subscribe(() => this.ObterAlunos());
  }

  showDeleteConfirm(id: number): void {
    this.modal.confirm({
      nzTitle: 'Você tem certeza que deseja excluir o registro?',
      nzContent: '<b style="color: red;">Ao excluir não será possível desfazer</b>',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.excluir(id),
      nzCancelText: 'Não',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
