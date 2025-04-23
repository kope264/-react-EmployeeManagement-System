
# THE OFFICE

## 📌 Overview
 **The office** is a Employee Management System a web-based application designed to help administrators manage tasks assigned to employees. This system allows admins to create, assign, and track the progress of various tasks.

## 🚀 Features
- **User Authentication**: Secure login and logout for admins and employees.
- **Task Management**:
  - Create new tasks.
  - Assign tasks to employees.
  - Track task status (New, Active, Completed, Failed).
- **Employee Management**:
  - View employee details.
  - Monitor assigned tasks and progress.
- **Dynamic UI**:
  - Responsive design using Tailwind CSS.
  - Interactive forms and task lists.

## 🛠️ Tech Stack
- **Frontend**: React.js (with Hooks & Context API)
- **Styling**: Tailwind CSS
- **State Management**: useState, useContext
- **Storage**: LocalStorage (for temporary data persistence)


## 🔧 Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/employee-management.git
   cd empManage
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Run the Project**
   ```sh
   npm run dev
   ```
4. Open `http://localhost:3000/` in your browser.

## 🏗️ How to Use
1. **Login as Admin**
   - Email: `admin@example.com`
   - Password: `123`
2. **Login as Employee**
   - Employees can log in with their respective credentials:
     - **John**: `john.doe@example.com` | Password: `123`
     - **Jane**: `jane.smith@example.com` | Password: `123`
     - **Bob**: `bob.brown@example.com` | Password: `123`
     - **Alice**: `alice.jones@example.com` | Password: `123`
     - **Charlie**: `charlie.davis@example.com` | Password: `123`
3. **Create a Task**
   - Enter task details (Title, Description, Date, Category, Assign To)
   - Click **Create Task**
4. **View Task List**
   - Check tasks assigned to employees
   - Monitor status updates


