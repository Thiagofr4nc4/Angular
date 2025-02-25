import { Routes } from '@angular/router';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';

export const routes: Routes = [
  { path: 'tela-login',
    component: TelaLoginComponent,
    data: { mostrarNavbar: false } 
  }, // Página inicial

  { path: 'tela-principal',
    component: TelaPrincipalComponent,
    data: { mostrarNavbar: true } 
  }, // Outra página

  {
    path: '',
    redirectTo: '/tela-login',
    pathMatch: 'full'
  }
];
