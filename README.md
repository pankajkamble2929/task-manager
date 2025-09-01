# Task Manager - Angular Project📝

A full-stack task management application built with **Angular 17 (Standalone Components)** and **Node.js/Express** with **MySQL** database.

---

## Features
- Add, view, and manage tasks.
- Task attributes: title, description, status, priority, due date.
- Responsive and clean UI with cards for tasks.
- Navigation bar and footer for easy routing.
- RESTful API backend with Sequelize ORM.

---

## Tech Stack

**Frontend:**
- Angular 17 (Standalone Components)
- Angular Router
- Angular Forms
- HttpClientModule
- SCSS/CSS for styling

**Backend:**
- Node.js + Express
- Sequelize ORM
- MySQL
- dotenv for environment variables
- CORS

## Setup Instructions

### Setup .env
PORT=3000
DB_DIALECT=mysql
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=taskdb

### Backend
- Navigate to `backend` folder: cd backend
- npm install
- npm run dev

### Frontend
- Navigate to `frontend` folder: cd frontend
- npm install
- ng serve

## API endpoints:
- GET /tasks - Get all tasks
- GET /tasks/:id - Get single task
- POST /tasks - Create task
- PUT /tasks/:id - Update task
- DELETE /tasks/:id - Delete task

## Usage
- Click Add Task to create a new task.
- Navigate to Task List to view all tasks.
- Click on a task card to see Task Details.
- Use the navigation bar to move between pages.


## License
This is ready to use and explains both frontend and backend setup.  
