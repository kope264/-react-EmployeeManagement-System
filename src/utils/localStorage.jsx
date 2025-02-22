

const employees = [
  {
    "id": 1,
    "name": "John",
    "email": "john.doe@example.com",
    "password": "123",
    "taskCount": {
      "new": 1,
      "completed": 1,
      "accepted": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Landing Page",
        "taskDescription": "Create the UI/UX design for the landing page.",
        "taskDate": "2024-12-10",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Login Issue",
        "taskDescription": "Resolve the authentication bug causing login failures.",
        "taskDate": "2024-12-08",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Prepare slides for the Q4 marketing strategy meeting.",
        "taskDate": "2024-12-01",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 2,
    "name": "Jane",
    "email": "jane.smith@example.com",
    "password": "123",
    "taskCount": {
      "new": 1,
      "completed": 2,
      "accepted": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Set Up Database",
        "taskDescription": "Configure the database for the new project.",
        "taskDate": "2024-12-07",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write Blog Post",
        "taskDescription": "Draft a blog post about the latest product release.",
        "taskDate": "2024-12-05",
        "category": "Content"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Review Campaign",
        "taskDescription": "Analyze the results of the email marketing campaign.",
        "taskDate": "2024-12-03",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 3,
    "name": "Bob",
    "email": "bob.brown@example.com",
    "password": "123",
    "taskCount": {
      "new": 2,
      "completed": 1,
      "accepted": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review the code submitted by the development team.",
        "taskDate": "2024-12-09",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Styling Issues",
        "taskDescription": "Resolve UI inconsistencies on the mobile app.",
        "taskDate": "2024-12-04",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Meeting Preparation",
        "taskDescription": "Prepare notes for the team meeting.",
        "taskDate": "2024-12-08",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Test API Endpoints",
        "taskDescription": "Test the new API endpoints for functionality.",
        "taskDate": "2024-12-02",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 4,
    "name": "Alice",
    "email": "alice.jones@example.com",
    "password": "123",
    "taskCount": {
      "new": 1,
      "completed": 1,
      "accepted": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Redesign Logo",
        "taskDescription": "Work on a modern redesign for the company logo.",
        "taskDate": "2024-12-12",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Feedback",
        "taskDescription": "Incorporate feedback from the client into the project.",
        "taskDate": "2024-12-05",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Update Documentation",
        "taskDescription": "Update the user documentation for the latest release.",
        "taskDate": "2024-12-03",
        "category": "Content"
      }
    ]
  },
  {
    "id": 5,
    "name": "Charlie",
    "email": "charlie.davis@example.com",
    "password": "123",
    "taskCount": {
      "new": 1,
      "completed": 1,
      "accepted": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Campaign",
        "taskDescription": "Plan and execute the new social media campaign.",
        "taskDate": "2024-12-11",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Optimize Website",
        "taskDescription": "Improve website performance and load times.",
        "taskDate": "2024-12-06",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Backup Server",
        "taskDescription": "Create a backup of the production server.",
        "taskDate": "2024-12-02",
        "category": "Operations"
      }
    ]
  }
];



const admin = {
  "id": 1,
  "name": "Admin",
  "email": "admin@example.com",
  "password": "123"
};



 
  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

  }
  
   export const getLocalStorage=()=>{
    const employees=  JSON.parse(localStorage.getItem('employees'))
    const admin=  JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
  }