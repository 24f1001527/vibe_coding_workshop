import React from 'react';

const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li
      className={`flex items-center justify-between p-3 rounded-lg mb-2 transition-colors ${
        task.completed ? 'bg-green-500' : 'bg-gray-700'
      }`}
    >
      <span
        className={`flex-grow cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-lg ml-2 transition-colors"
      >
        Delete
      </button>
    </li>
  );
};

export default Task;
