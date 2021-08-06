import { EventEmitter, Injectable } from '@angular/core';
import { TokenService } from '../../../autenticacao/token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable, ObservableInput } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

class UsuarioTokenResponse {
  nome!: string;
  jti!: string;
  exp!: string;
  iss!: string;
  aud!: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
    ) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private baseUrl(): string {
    return `${environment.api}/autenticacao`;
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const userTokenRes = jwt_decode(token) as UsuarioTokenResponse;

    let novoUsuario = new Usuario();
    novoUsuario.nome = userTokenRes.nome;

    this.usuarioSubject.next(novoUsuario);
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
    this.mostrarMenuEmitter.emit(true);
  }

  logout() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
    this.mostrarMenuEmitter.emit(false);
  }

  estaLogado() {
    //this.mostrarMenuEmitter.emit(true);
    return this.tokenService.possuiToken();
  }

  public saveUsuario(form: any): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl() + "/registro", form);
  }

  public existeUsuario(nome: string): Observable<Object> {
    return this.http.get(this.baseUrl() + "/existe/" + nome);
  }
}
