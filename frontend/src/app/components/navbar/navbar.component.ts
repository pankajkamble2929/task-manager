import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="logo" routerLink="/">📝 Task Manager</div>
      <div class="links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a routerLink="/tasks" routerLinkActive="active">Task List</a>
        <a routerLink="/add-task" routerLinkActive="active">Add Task</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;
      background: linear-gradient(90deg, #4a90e2, #0072ff);
      color: white;
      font-family: Arial, sans-serif;
    }

    .logo {
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer; /* Added cursor for better UX */
    }

    .links a {
      color: white;
      margin-left: 15px;
      text-decoration: none;
      font-weight: 500;
      transition: 0.3s;
    }

    .links a:hover {
      text-decoration: underline;
    }

    .active {
      border-bottom: 2px solid yellow;
    }
  `]
})
export class NavbarComponent {}
