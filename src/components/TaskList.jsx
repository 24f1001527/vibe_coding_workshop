import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Task from './Task';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <motion.ul>
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Task
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};

export default TaskList;
