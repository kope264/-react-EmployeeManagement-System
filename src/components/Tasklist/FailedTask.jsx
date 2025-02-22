import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="min-w-[400px] bg-gray-800 rounded-lg shadow-lg p-8 h-[350px]">
    {/* Task Title and Date */}
    <div className="flex justify-between items-center mb-4">
      <span className="text-sm font-bold uppercase text-teal-300">
        {data.category}
      </span>
      <span className="text-sm text-gray-400">{data.taskDate}</span>
    </div>
    {/* Task Description */}
    <p className="text-xl font-bold text-gray-200">
      {data.taskDescription}
    </p><br />
    <br />
    <br />
    <br />
    <button className="bg-red-500 text-white py-1 px-4 text-sm font-semibold rounded">
    FAILED
  </button>
  </div>
  )
}

export default FailedTask