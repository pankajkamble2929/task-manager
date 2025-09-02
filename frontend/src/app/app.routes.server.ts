// src/app/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'tasks',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'add-task',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'tasks/:id',
    renderMode: RenderMode.Server   // ✅ dynamic, rendered on demand
  },
  {
    path: '**',
    renderMode: RenderMode.Server   // ✅ wildcard handled dynamically
  }
];
