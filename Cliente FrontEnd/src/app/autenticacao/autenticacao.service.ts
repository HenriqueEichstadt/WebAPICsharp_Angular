import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from '../pages/cadastros/usuario/usuario.service';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API = environment.api;

class TokenResponseBody{
  token!: string;
  expiration!: Date;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(`${API}/autenticacao/login`,
        {
          username: usuario,
          password: senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          let response = res.body as TokenResponseBody;
          let authToken = "Bearer " + response.token;
          this.usuarioService.salvaToken(authToken);
        })
      );
  }
}
