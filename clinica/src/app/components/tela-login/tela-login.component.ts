import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})
export class TelaLoginComponent {
  modalAtivo = false;

  mostrarModal() {
    this.modalAtivo = !this.modalAtivo;
  }
}
