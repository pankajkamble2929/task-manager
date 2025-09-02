import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="home">
      <h1>Welcome to Task Manager 📝</h1>
      <p>Manage your tasks efficiently with our simple app.</p>

      <div class="cta-buttons">
        <a routerLink="/tasks" class="btn">View Tasks</a>
        <a routerLink="/add-task" class="btn primary">Add New Task</a>
      </div>
    </div>
  `,
  styles: [
    `
      .home {
        text-align: center;
        margin-top: 50px;
        font-family: Arial, sans-serif;
      }
      h1 {
        font-size: 2.5rem;
        color: #0072ff;
      }
      p {
        font-size: 1.2rem;
        color: #555;
        margin-bottom: 20px;
      }
      .cta-buttons {
        display: flex;
        justify-content: center;
        gap: 15px;
      }
      .btn {
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        background: #f4f4f4;
        border: 1px solid #ccc;
        color: #333;
        font-weight: bold;
        transition: 0.3s;
      }
      .btn:hover {
        background: #e0e0e0;
      }
      .btn.primary {
        background: #0072ff;
        color: white;
        border: none;
      }
      .btn.primary:hover {
        background: #005ace;
      }
    `,
  ],
})
export class HomeComponent {}
