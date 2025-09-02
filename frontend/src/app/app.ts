import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HttpClientModule],
  template: `
    <app-navbar></app-navbar>
    <main style="padding: 20px; min-height: calc(90vh - 125px);">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `
})
export class App {}
