import React from 'react';
import { motion } from 'framer-motion';

const Task = ({ task, toggleComplete, deleteTask }) => {
  const difficultyColors = {
    Easy: 'bg-green-500',
    Medium: 'bg-yellow-500',
    Hard: 'bg-orange-500',
    Epic: 'bg-purple-500',
  };

  return (
    <motion.li
      className={`flex items-center justify-between p-3 rounded-lg mb-2 transition-colors ${
        task.completed ? 'bg-gray-600' : 'bg-gray-700'
      }`}
      animate={{
        scale: task.completed ? 0.8 : 1,
        opacity: task.completed ? 0.5 : 1,
        x: task.completed ? 100 : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <span
        className={`flex-grow cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </span>
      <div className="flex items-center">
        <span
          className={`px-2 py-1 text-sm font-bold text-white rounded-full ${difficultyColors[task.difficulty] || 'bg-gray-500'}`}
        >
          {task.difficulty}
        </span>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-lg ml-2 transition-colors"
        >
          Delete
        </button>
      </div>
    </motion.li>
  );
};

export default Task;
