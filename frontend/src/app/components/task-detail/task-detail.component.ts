import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="task-detail" *ngIf="task; else noTask">
      <h2>📌 Task Details</h2>
      <h3>{{ task.title }}</h3>
      <p>{{ task.description }}</p>
      <p>Status: <strong [class]="task.status">{{ task.status }}</strong></p>
      <p>Priority: <strong [class]="task.priority">{{ task.priority }}</strong></p>
      <p *ngIf="task.dueDate">Due: {{ task.dueDate | date:'mediumDate' }}</p>
      <a routerLink="/tasks" class="btn">Back to Task List</a>
    </div>

    <ng-template #noTask>
      <p>Task not found. <a routerLink="/tasks">Go back to Task List</a></p>
    </ng-template>
  `,
  styles: [`
    .task-detail {
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
      border-radius: 10px;
      background: #f4f4f4;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      font-family: Arial, sans-serif;
    }
    h2 { text-align: center; color: #0072ff; margin-bottom: 20px; }
    h3 { color: #333; margin-bottom: 10px; }
    p { color: #555; margin-bottom: 10px; }
    .btn {
      display: inline-block;
      padding: 8px 16px;
      background: #0072ff;
      color: white;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
      transition: 0.3s;
    }
    .btn:hover { background: #005ace; }

    .todo { color: #ff9800; font-weight: bold; }
    .in-progress { color: #0072ff; font-weight: bold; }
    .done { color: #4caf50; font-weight: bold; }

    .low { color: #4caf50; }
    .medium { color: #ff9800; }
    .high { color: #f44336; }
  `]
})
export class TaskDetailComponent implements OnInit {
  task: Task | null = null;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) this.loadTask(id);
  }

  loadTask(id: number) {
    this.taskService.getTask(id).subscribe({
      next: (data) => this.task = data,
      error: (err) => {
        console.error('Error fetching task:', err);
        this.task = null;
      }
    });
  }
}
