import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvide';
import NewTask from '../Tasklist/NewTask';
import { data } from 'autoprefixer';



const AdminDash = (props) => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
   
    if (!taskTitle||!taskDescription||!taskDate||!category||!assignTo) {
      alert("fill the complete details");
    }
  
  
    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      assignTo,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
    const data= JSON.parse(localStorage.getItem('employees'))

    data.forEach(function(elem){
     
      if(assignTo===elem.name){
        elem.tasks.push(newTask)
        elem.taskCount.new++
        
      
       
      }
     
    })
    localStorage.setItem('employees',JSON.stringify(data))

    setAssignTo('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setTaskTitle('')

  };
  
  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('')
  };

  const authData = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header data={props.data} className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6 rounded-b-lg shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={logoutUser}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Task Creation Form */}
      <section className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-5xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-8 text-white text-center">
          Create a New Task
        </h2>
        <form data={props.data} onSubmit={(e)=>{
          submitHandler(e);
        }} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left Column: Task Title, Date, Assign To, Category */}
          <div className="space-y-6">
            {/* Task Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-300"
              >
                Task Title
              </label>
              <input 
                value={taskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                type="text"
                id="title"
                className="w-full mt-2 p-4 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:bg-gray-600"
                placeholder="Enter task title"
              />
            </div>
            </div>

            {/* Date */}
            <div>
  <label htmlFor="date" className="block text-sm font-medium text-gray-300">
    Date
  </label>
  <input
    value={taskDate}
    onChange={(e) => setTaskDate(e.target.value)}
    onFocus={(e) => e.target.showPicker()} // This ensures the calendar appears
    type="date"
    id="date"
    className="w-full mt-2 p-4 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:bg-gray-600 cursor-pointer"
  />
</div>

            {/* Assign To */}
            <div>
              <label
                htmlFor="assignTo"
                className="block text-sm font-medium text-gray-300"
              >
                Assign To
              </label>
              <select
  value={assignTo}
  onChange={(e) => {
    console.log("Selected AssignTo:", e.target.value); // Debugging
    setAssignTo(e.target.value);
  }}
  id="assignTo"
  className="w-full mt-2 p-4 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:bg-gray-600"
>
  <option value="" disabled>Select an Employee</option>
  {authData?.employees?.map((employee) => (
    <option key={employee.id} value={employee.name}>
      {employee.name}
    </option>
  ))}
</select>

            </div>

            {/* Category */}
<div>
  <label
    htmlFor="category"
    className="block text-sm font-medium text-gray-300"
  >
    Category of Task
  </label>
  <select
    value={category}
    onChange={(e) => {
      console.log("Selected Category:", e.target.value); // Debugging
      setCategory(e.target.value);
    }}
    id="category"
    className="w-full mt-2 p-4 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:bg-gray-600"
  >
    <option value="" disabled>Select a Category</option>
    <option value="Development">Development</option>
    <option value="Design">Design</option>
    <option value="Marketing">Marketing</option>
    <option value="Other">Other</option>
  </select>
</div>

          {/* Right Column: Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300"
            >
              Description
            </label>
            <textarea
               value={taskDescription}
               onChange={(e)=>{
                 setTaskDescription(e.target.value)
               }}
              id="description"
              rows="8"
              className="w-full mt-2 p-4 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:bg-gray-600"
              placeholder="Enter task description"
            ></textarea>
          </div>

          {/* Create Task Button */}
          <div className="w-full col-span-2">
            <button
           
              type="submit"
              className="w-full py-4 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none text-gray-100 font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Create Task
            </button>
          </div>
        </form>
      </section>

      {/* Task List */}
      <section data={props.data} className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-xl max-w-5xl mx-auto mt-8">
  <h2 className="text-2xl font-bold mb-6 text-white text-center tracking-wider">
    Task List
  </h2>
  <table className="table-auto w-full text-center text-gray-200 border-collapse">
    <thead>
      <tr className="bg-gray-700 text-gray-300 text-sm uppercase tracking-wide">
        <th className="px-6 py-3 border-b-2 border-gray-600">Employee</th>
        <th className="px-6 py-3 border-b-2 border-gray-600">New Tasks</th>
        <th className="px-6 py-3 border-b-2 border-gray-600">Active Tasks</th>
        <th className="px-6 py-3 border-b-2 border-gray-600">Completed Tasks</th>
        <th className="px-6 py-3 border-b-2 border-gray-600">Failed Tasks</th>
      </tr>
    </thead>
    {authData.employees.map((elem, index) => (
      <tbody key={index} className="divide-y divide-gray-600">
        <tr className="bg-gray-800 hover:bg-gray-700 transition duration-200">
          <td className="px-6 py-4 font-medium">{elem.name}</td>
          <td className="px-6 py-4 text-yellow-400 font-semibold">
            {elem.taskCount.new}
          </td>
          <td className="px-6 py-4 text-blue-400 font-semibold">
            {elem.taskCount.accepted}
          </td>
          <td className="px-6 py-4 text-green-400 font-semibold">
            {elem.taskCount.completed}
          </td>
          <td className="px-6 py-4 text-red-400 font-semibold">
            {elem.taskCount.failed}
          </td>
        </tr>
      </tbody>
    ))}
  </table>
</section>

    </div>
  );
};

export default AdminDash;