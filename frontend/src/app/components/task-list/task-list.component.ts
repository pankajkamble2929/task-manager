import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="task-list-container">
      <h2>📝 Task List</h2>

      <div class="cards" *ngIf="tasks.length; else noTasks">
        <a class="task-card" *ngFor="let task of tasks" [routerLink]="['/tasks', task.id]">
          <h3>{{ task.title }}</h3>
          <p>Status: <span [class]="task.status">{{ task.status }}</span></p>
          <p>Priority: <span [class]="task.priority">{{ task.priority }}</span></p>
          <p *ngIf="task.dueDate">Due: {{ task.dueDate | date:'mediumDate' }}</p>
        </a>
      </div>

      <ng-template #noTasks>
        <p>No tasks found. Add a new task!</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .task-list-container {
      max-width: 900px;
      margin: 40px auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    h2 { text-align: center; color: #0072ff; margin-bottom: 20px; }

    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .task-card {
      display: block;
      background: #f4f4f4;
      border-radius: 10px;
      padding: 15px;
      width: 220px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s, box-shadow 0.2s;
      text-decoration: none;
      color: inherit;
    }

    .task-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }

    .task-card h3 {
      margin-top: 0;
      color: #0072ff;
    }

    .task-card p {
      margin: 5px 0;
      font-size: 14px;
    }

    .todo { color: #ff9800; font-weight: bold; }
    .in-progress { color: #0072ff; font-weight: bold; }
    .done { color: #4caf50; font-weight: bold; }

    .low { color: #4caf50; }
    .medium { color: #ff9800; }
    .high { color: #f44336; }
  `]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getTasks().subscribe({
      next: (data) => this.tasks = data,
      error: (err) => console.error('Error fetching tasks:', err)
    });
  }
}
