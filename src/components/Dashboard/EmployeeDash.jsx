import React from 'react';
import AllTask from '../Tasklist/AllTask';
import { setLocalStorage } from '../../utils/localStorage';

const employeeDash = ({ data }) => {
  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <header className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6 rounded-b-lg shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Employee Dashboard</h1>
          <button
            onClick={logoutUser}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
        <h2 className="text-2xl font-semibold mt-4">Welcome, {data.name}!</h2>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Task Report</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-teal-500 hover:bg-teal-600 text-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-bold">New Tasks</h3>
            <p className="text-4xl font-bold mt-4">{data.taskCount.new}</p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Completed Tasks</h3>
            <p className="text-4xl font-bold mt-4">{data.taskCount.completed}</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Accepted Tasks</h3>
            <p className="text-4xl font-bold mt-4">{data.taskCount.accepted}</p>
          </div>
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Failed Tasks</h3>
            <p className="text-4xl font-bold mt-4">{data.taskCount.failed}</p>
          </div>
        </div>

        <AllTask data={data} />
      </main>
    </div>
  );
};

export default employeeDash;