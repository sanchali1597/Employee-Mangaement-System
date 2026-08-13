# Employee Management System

A React-based Employee Management System where admins can create and assign tasks to employees, while employees can accept, complete, or fail assigned tasks.

##  Features

### Admin Dashboard

- Admin login
- View all employees
- Create and assign new tasks
- View employee task statistics
- Track:
  - New Tasks
  - Accepted Tasks
  - Completed Tasks
  - Failed Tasks

### Employee Dashboard

- Employee login
- View assigned tasks
- Accept new tasks
- Mark accepted tasks as completed
- Mark accepted tasks as failed
- View task statistics

## Technologies Used

- React.js
- JavaScript
- Tailwind CSS
- React Context API
- React Hooks
- LocalStorage
- Vite

## 📂 Project Structure

```text
src
│
├── components
│   ├── Auth
|      └──Login
│   ├── Dashboard
|      ├──Admin Dashboard
|      └──Emp Dashboard
│   ├── Others
|      ├──All Task
|      ├──Create Task
|      ├──Header
|      └──TaskNumbers
│   └── TaskList
|      ├──AcceptTask
|      ├──CompleteTask
|      ├──NewTask
|      ├──FailedTask
|      └──Task
│
├── context
│   └── AuthProvider.jsx
│
├── Utils
│   └── localstorage.js
│
├── App.jsx
└── main.jsx
```
## Login System

The application supports two types of users:
Admin->
Admin can:
Create tasks
Assign tasks to employees
View all employee task statistics

Employee->
Employees can:
View their assigned tasks
Accept tasks
Complete tasks
Fail tasks

## Task Status

Each task can have one of the following statuses:
New Task – Task has been assigned but not accepted.
Accepted Task – Employee has accepted the task.
Completed Task – Employee has completed the task.
Failed Task – Employee has failed the task.

##Data Storage

The application uses localStorage to store employee and admin information.
