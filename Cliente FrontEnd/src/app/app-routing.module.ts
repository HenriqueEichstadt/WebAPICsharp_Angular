import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
    canLoad: [AutenticacaoGuard]
  },
  {
    path: 'aluno',
    loadChildren: () => import('./pages/cadastros/aluno/aluno.module').then(m => m.AlunoModule),
    canLoad: [AutenticacaoGuard]
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/cadastros/usuario/usuario.module').then(m => m.UsuarioModule),
    canLoad: [AutenticacaoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
