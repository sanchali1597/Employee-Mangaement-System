
const employees = [
  {
    name: "Aarav",
    email: "employee1@example.com",
    password: "125",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        id:1,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription:
          "Create a responsive login page with email and password validation.",
        taskDate: "2026-08-10",
        category: "Development",
      },
      {
        id:2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription:
          "Design the homepage layout and make it responsive for desktop and mobile.",
        taskDate: "2026-08-07",
        category: "Design",
      },
      {
        id:3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription:
          "Connect the frontend application with the employee management API.",
        taskDate: "2026-08-12",
        category: "Development",
      },
      {
        id:4,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Setup",
        taskDescription:
          "Configure the development database and create the required tables.",
        taskDate: "2026-08-05",
        category: "Backend",
      },
    ],
  },

  {
    name: "Priya",
    email: "employee2@example.com",
    password: "125",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },

    tasks: [
      {
        id:1,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription:
          "Develop an employee dashboard displaying tasks and progress statistics.",
        taskDate: "2026-08-10",
        category: "Development",
      },
      {
        id:2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription:
          "Update project documentation with the latest features and instructions.",
        taskDate: "2026-08-06",
        category: "Documentation",
      },
      {
        id:3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix UI Bugs",
        taskDescription:
          "Identify and fix alignment and responsiveness issues in the application.",
        taskDate: "2026-08-13",
        category: "Bug Fixing",
      },
      {
        id:4,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing Module",
        taskDescription:
          "Test the employee module and identify issues before deployment.",
        taskDate: "2026-08-04",
        category: "Testing",
      },
    ],
  },

  {
    name: "Rohan",
    email: "employee3@example.com",
    password: "125",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        id:1,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create User Profile",
        taskDescription:
          "Build a user profile page showing employee information and activity.",
        taskDate: "2026-08-10",
        category: "Development",
      },
      {
        id:2,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription:
          "Add a search feature to allow users to quickly find employees.",
        taskDate: "2026-08-11",
        category: "Development",
      },
      {
        id:3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Report",
        taskDescription:
          "Prepare a weekly report containing project progress and completed work.",
        taskDate: "2026-08-08",
        category: "Management",
      },
      {
        id:4,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Website",
        taskDescription:
          "Improve website loading speed and optimize unnecessary components.",
        taskDate: "2026-08-14",
        category: "Optimization",
      },
      {
        id:5,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Application",
        taskDescription:
          "Deploy the latest version of the application to the staging server.",
        taskDate: "2026-08-03",
        category: "Deployment",
      },
    ],
  },

  {
    name: "Ananya",
    email: "employee4@example.com",
    password: "125",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },

    tasks: [
      {
        id:1,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription:
          "Develop a modern landing page for the new company product.",
        taskDate: "2026-08-10",
        category: "Frontend",
      },
      {
        id:2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Code",
        taskDescription:
          "Review the team's recent code changes and provide feedback.",
        taskDate: "2026-08-07",
        category: "Code Review",
      },
      {
        id:3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Add Dark Mode",
        taskDescription:
          "Implement a dark mode option for the application interface.",
        taskDate: "2026-08-12",
        category: "Frontend",
      },
      {
        id:4,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Improve Accessibility",
        taskDescription:
          "Improve keyboard navigation and accessibility across the application.",
        taskDate: "2026-08-15",
        category: "Accessibility",
      },
    ],
  },

  {
    name: "Vikram",
    email: "employee5@example.com",
    password: "125",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        id:1,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Task Manager",
        taskDescription:
          "Develop a task management interface for creating and tracking employee tasks.",
        taskDate: "2026-08-10",
        category: "Development",
      },
      {
        id:2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Database Schema",
        taskDescription:
          "Design the database schema required for the employee management system.",
        taskDate: "2026-08-06",
        category: "Database",
      },
      {
        id:3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Notifications",
        taskDescription:
          "Add notifications when employees receive new tasks.",
        taskDate: "2026-08-13",
        category: "Backend",
      },
      {
        id:4,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Testing",
        taskDescription:
          "Test the application performance and identify slow operations.",
        taskDate: "2026-08-05",
        category: "Testing",
      },
      {
        id:5,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription:
          "Prepare a presentation explaining the project's features and architecture.",
        taskDate: "2026-08-16",
        category: "Presentation",
      },
    ],
  },
];

const admin=[
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "125"
  }
];

export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
 
  return {employees,admin}
}
