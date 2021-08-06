import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/pages/cadastros/usuario/usuario.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-template-admin',
  templateUrl: './template-admin.component.html',
  styleUrls: ['./template-admin.component.css']
})
export class TemplateAdminComponent implements OnInit {

  isCollapsed = false;
  mostrarMenu: boolean = true;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.usuarioService.mostrarMenuEmitter.subscribe(
      deveMostrar => this.mostrarMenu = deveMostrar
    );
  }

  logout(): void {
    this.usuarioService.logout();
    this.router.navigate(['login']);
    window.location.reload();
  }

}
