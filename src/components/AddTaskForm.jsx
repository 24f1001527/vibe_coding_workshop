import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [text, setText] = useState('');
  const [difficulty, setDifficulty] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text, difficulty);
      setText('');
      setDifficulty('Medium');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="w-full bg-gray-700 text-white p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
        <option value="Epic">Epic</option>
      </select>
      <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg mt-2 transition-colors">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
