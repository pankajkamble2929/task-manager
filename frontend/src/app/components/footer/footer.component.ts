import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <p>© 2025 Task Manager. All rights reserved.</p>
      <div class="links">
        <a href="https://github.com/" target="_blank" rel="noopener">GitHub</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener">Twitter</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: 50px;
      padding: 20px;
      background: linear-gradient(90deg, #4a90e2, #0072ff);
      color: white;
      text-align: center;
      font-family: Arial, sans-serif;
    }

    .footer p {
      margin: 0 0 10px 0;
    }

    .footer .links a {
      color: white;
      margin: 0 10px;
      text-decoration: none;
      font-weight: 500;
      transition: 0.3s;
    }

    .footer .links a:hover {
      text-decoration: underline;
    }
  `]
})
export class FooterComponent {}
