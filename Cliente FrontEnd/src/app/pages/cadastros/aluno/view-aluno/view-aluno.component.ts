import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-view-aluno',
  templateUrl: './view-aluno.component.html',
  styleUrls: ['./view-aluno.component.css']
})
export class ViewAlunoComponent implements OnInit {

  entity: Aluno = new Aluno();

  constructor(private route: ActivatedRoute) {
    this.entity = this.route.snapshot.data.entity;
   }

  ngOnInit(): void {
  }

  voltar(): void {
    history.go(-1);
  }

}
