import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from "./components/base-ui/base-ui.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, NavbarComponent, CommonModule, BaseUiComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinica';

  mostrarNavbar = false;  

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const routeData = this.activatedRoute.root.firstChild?.snapshot.data;
        console.log('Rota atual:', this.router.url);
        console.log('Data da rota:', routeData);
        this.mostrarNavbar = routeData?.['mostrarNavbar'] ?? false;
        console.log('mostrarNavbar:', this.mostrarNavbar);
      }
    });
  }
}
