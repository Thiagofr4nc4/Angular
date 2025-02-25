import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})
export class TelaLoginComponent {
  modalAtivo = false;
  constructor(private router: Router) {}

  mostrarModal() {
    this.modalAtivo = !this.modalAtivo;
  }

  irTelaPrincipal(){
    this.router.navigate(['/tela-principal']);
  }
}
