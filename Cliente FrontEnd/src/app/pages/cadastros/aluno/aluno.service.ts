import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService implements Resolve<Aluno> {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aluno> {
    return this.getAlunoById(route.params.id);
  }

  private baseUrl(): string {
    return `${environment.api}/aluno`;
  }

  /**
     * Busca todos os alunos cadastrados
     */
  public getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.baseUrl());
  }

  /**
   * Busca aluno pelo id
   */
  public getAlunoById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(this.baseUrl() + `/${id}`);
  }

  /**
   * Salvar um novo aluno
   */
  public saveAluno(form: any): Observable<Aluno> {
    return this.http.post<Aluno>(this.baseUrl(), form);
  }

  /**
   * Atualizar um aluno existente
   */
  public updateAluno(form: any): Observable<Aluno> {
    return this.http.put<Aluno>(this.baseUrl(), form);
  }

  /**
   * Deletar um aluno pelo id
   */
  public deleteAluno(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl() + `/${id}`);
  }
}
