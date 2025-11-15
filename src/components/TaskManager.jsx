import React, { useState, useEffect } from 'react';

const TaskManager = ({ completeTask }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Learn Tailwind CSS', completed: false },
      { id: 3, text: 'Build a cool project', completed: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (task && !task.completed) {
      completeTask();
    }
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Daily Tasks</h2>
      <AddTaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskManager;
