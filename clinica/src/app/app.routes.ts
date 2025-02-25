import { Routes } from '@angular/router';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';

export const routes: Routes = [
  { path: '', component: TelaLoginComponent }, // Página inicial
  { path: 'tela-principal', component: TelaPrincipalComponent } // Outra página
];
