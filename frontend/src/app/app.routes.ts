import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'add-task', component: AddTaskComponent },
  {
    path: 'tasks/:id',
    component: TaskDetailComponent,
    data: { renderMode: 'server' }, 
  },
  { path: '**', redirectTo: '' },
];
