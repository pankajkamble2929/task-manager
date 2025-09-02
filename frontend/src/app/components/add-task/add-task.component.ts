import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="add-task-container">
      <h2>➕ Add New Task</h2>
      <form (ngSubmit)="addTask()">
        <input
          type="text"
          placeholder="Task title"
          [(ngModel)]="taskTitle"
          name="title"
          required
        />
        <textarea
          placeholder="Task description"
          [(ngModel)]="taskDescription"
          name="description"
          rows="4"
        ></textarea>

        <select [(ngModel)]="taskStatus" name="status">
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <select [(ngModel)]="taskPriority" name="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input type="date" [(ngModel)]="taskDueDate" name="dueDate" />

        <button type="submit">Add Task</button>
      </form>

      <p *ngIf="message" class="success">{{ message }}</p>
    </div>
  `,
  styles: [`
    .add-task-container {
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
      background: #f4f4f4;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      font-family: Arial, sans-serif;
    }
    h2 { text-align: center; color: #0072ff; margin-bottom: 20px; }
    input, textarea, select { width: 100%; margin-bottom: 12px; padding: 8px; border-radius: 5px; border: 1px solid #ccc; }
    button { padding: 10px 20px; background: #0072ff; color: white; border: none; border-radius: 5px; cursor: pointer; }
    button:hover { background: #005ace; }
    .success { color: green; margin-top: 10px; }
  `]
})
export class AddTaskComponent {
  taskTitle: string = '';
  taskDescription: string = '';
  taskStatus: 'todo' | 'in-progress' | 'done' = 'todo';
  taskPriority: 'low' | 'medium' | 'high' = 'medium';
  taskDueDate?: string; // <-- optional string, undefined if empty
  message: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (!this.taskTitle.trim()) {
      this.message = 'Please enter a task title.';
      return;
    }

    const newTask: Task = {
      title: this.taskTitle,
      description: this.taskDescription,
      status: this.taskStatus,
      priority: this.taskPriority,
      dueDate: this.taskDueDate || undefined // <-- pass undefined instead of null
    };

    this.taskService.addTask(newTask).subscribe({
      next: (task) => {
        this.message = `Task "${task.title}" added successfully!`;
        // reset form
        this.taskTitle = '';
        this.taskDescription = '';
        this.taskStatus = 'todo';
        this.taskPriority = 'medium';
        this.taskDueDate = undefined;
      },
      error: (err) => {
        this.message = `Error adding task: ${err.message}`;
      }
    });
  }
}
