import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelaLoginComponent } from "./components/tela-login/tela-login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TelaLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clinica';
}
