import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './pages/cadastros/usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  mostrarMenu: boolean = true;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.usuarioService.mostrarMenuEmitter.subscribe(
      deveMostrar => this.mostrarMenu = deveMostrar
    );
  }

  logout(): void {
    this.usuarioService.logout();
    this.router.navigate(['login']);
  }
}
